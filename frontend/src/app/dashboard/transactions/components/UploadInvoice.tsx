"use client";

import { useState, useRef, useEffect } from "react";
import { createWorker } from "tesseract.js";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

// -------------------------------------------
// PRO UTILITIES: vendor lookup + dept detection
// -------------------------------------------
async function fetchVendors() {
  try {
    const r = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vendors`);
    const j = await r.json();
    return j || [];
  } catch (_) {
    return [];
  }
}

function guessDepartment(text: string) {
  const t = text.toLowerCase();
  if (t.includes("repair") || t.includes("maintenance")) return "Maintenance";
  if (t.includes("consulting") || t.includes("service")) return "Services";
  if (t.includes("food") || t.includes("catering")) return "Catering";
  if (t.includes("office") || t.includes("stationery")) return "Procurement";
  return "Finance"; // default catch-all
}

function preRiskScore(amount: number, vendorMatch: boolean) {
  let score = 0;
  if (amount > 500000) score += 40;
  if (!vendorMatch) score += 30;
  if (amount > 1000000) score += 50;
  return score > 70 ? "HIGH" : score > 30 ? "WARNING" : "LOW";
}

// -------------------------------------------
// PRO COMPONENT
// -------------------------------------------
export default function UploadInvoicePro({ onCreated }: any) {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);
  const [vendors, setVendors] = useState<any[]>([]);
  const workerRef = useRef<any>(null);
  const scanRef = useRef(null);

  // Load vendor database from API
  useEffect(() => {
    fetchVendors().then(setVendors);
  }, []);

  // Preload OCR worker ONCE
  useEffect(() => {
    let active = true;

    (async () => {
      const worker = await createWorker("eng", undefined, {
        logger: () => {},
      });

      if (active) workerRef.current = worker;
    })();

    return () => {
      active = false;
      workerRef.current?.terminate();
    };
  }, []);

  // GSAP scanning animation
  useEffect(() => {
    if (loading && scanRef.current) {
      gsap.fromTo(
        scanRef.current,
        { y: -200, opacity: 0 },
        {
          y: 200,
          opacity: 0.35,
          duration: 1,
          repeat: -1,
          ease: "power2.inOut",
        }
      );
    }
  }, [loading]);

  // -------------------------------------------
  // MAIN FILE HANDLER
  // -------------------------------------------
  async function handleFile(e: any) {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
    setLoading(true);

    // Optimistic placeholder
    setData({
      invoiceNumber: "Detecting…",
      amount: "Scanning…",
      supplier: "Extracting…",
      department: "Profiling…",
      risk: "Evaluating…",
    });

    const worker = workerRef.current;
    if (!worker) {
      setTimeout(() => handleFile(e), 300); // delay + retry
      return;
    }

    // RUN OCR
    const { data: { text } } = await worker.recognize(file);

    // Extract invoice number
    const invoiceMatch = text.match(/invoice\s*[:#]?\s*([A-Z0-9\-]+)/i);

    // Extract amount (pro regex)
    const amountMatch = text.match(
      /(KES|KSH|USD)?\s?([\d{1,3}(?:,\d{3})*(?:\.\d{1,2})?]+)/i
    );

    // Supplier guess
    const lines = text.split("\n")
      .map((l: string) => l.trim())
      .filter((l: string) => l.length > 3);

    const supplierGuess = lines.find((l:string) =>
      vendors.some((v: any) => l.toLowerCase().includes(v.name.toLowerCase()))
    ) || lines[0] || "Unknown Supplier";

    // Match vendor DB
    const vendorMatch = vendors.some((v: any) =>
      supplierGuess.toLowerCase().includes(v.name.toLowerCase())
    );

    // Department inference
    const departmentGuess = guessDepartment(text);

    // Clean amount
    const extractedAmount = amountMatch
      ? Number(amountMatch[2].replace(/,/g, ""))
      : 0;

    // Pre-score
    const riskGuess = preRiskScore(extractedAmount, vendorMatch);

    const parsed = {
      invoiceNumber: invoiceMatch?.[1] ?? "Not found",
      amount: extractedAmount,
      supplier: supplierGuess,
      vendorMatch,
      department: departmentGuess,
      rawText: text,
      risk: riskGuess,
    };

    setData(parsed);

    // -------------------------------------------
    // 🚀 AUTO SEND TO YOUR API
    // -------------------------------------------
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/transactions/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        supplierName: parsed.supplier,
        invoiceNumber: parsed.invoiceNumber,
        amount: parsed.amount,
        department: parsed.department,
        rawPayload: parsed,
      }),
    });

    // Refresh UI
    onCreated?.();

    setLoading(false);
  }

  return (
    <div className="space-y-4">
      <label className="block text-slate-300 text-sm">Upload Invoice</label>

      {/* Drag + Drop Zone */}
      <label className="border border-white/10 rounded-xl p-6 text-center cursor-pointer bg-white/5 hover:bg-white/10 transition">
        <input type="file" accept="image/*" onChange={handleFile} className="hidden" />
        <span>Click to upload invoice image</span>
      </label>

      {/* Image Preview */}
      {preview && (
        <div className="relative w-60">
          <img src={preview} className="rounded-xl shadow-lg" />

          <AnimatePresence>
            {loading && (
              <motion.div
                ref={scanRef}
                className="absolute inset-0 bg-gradient-to-b from-blue-400/20 to-blue-600/10 pointer-events-none"
              />
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Extracted Panel */}
      {data && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1 text-sm"
        >
          <div><strong>Invoice:</strong> {data.invoiceNumber}</div>
<div>
  <strong>Amount:</strong>{" "}
  {typeof data.amount === "number"
    ? data.amount.toLocaleString()
    : data.amount}
</div>
<div><strong>Supplier:</strong> {data.supplier}</div>
<div><strong>Department:</strong> {data.department}</div>
<div><strong>Risk (pre-score):</strong> {data.risk}</div>
        </motion.div>
      )}
    </div>
  );
}
