// NewTransactionDrawer.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import VendorAutocomplete from "./VendorAutocomplete";
import UploadInvoice from "./UploadInvoice";
import { useState } from "react";
import { createTransaction } from "../lib/api";

export default function NewTransactionDrawer({
  open,
  onClose,
  onCreated
}: {
  open: boolean;
  onClose: () => void;
  onCreated?: (id: string) => void;
}) {
  const [form, setForm] = useState({
    supplierName: "",
    invoiceNumber: "",
    department: "",
    amount: "",
    description: ""
  });

  const [loading, setLoading] = useState(false);

  const setField = (key: string, value: any) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  async function submit(e: any) {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        supplierName: form.supplierName,
        invoiceNumber: form.invoiceNumber,
        department: form.department,
        amount: Number(form.amount),
        rawPayload: { description: form.description }
      };

      const res = await createTransaction(payload);

      if (res?.transactionId) {
        onCreated?.(res.transactionId); // 👉 OPEN DETAILS MODAL
        onClose(); // 👉 CLOSE DRAWER
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
          />

          <motion.aside
            className="fixed right-0 top-0 h-full w-full md:w-[520px] z-50 bg-[#0a0f17] border-l border-white/10 shadow-2xl p-6 overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0.05, duration: 0.45 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold tracking-wide text-white">
                New Transaction
              </h3>
              <button onClick={onClose} className="p-2 bg-white/10 rounded">
                ✕
              </button>
            </div>

            <form onSubmit={submit} className="space-y-5">
              <div>
                <label className="text-sm text-gray-400">Supplier</label>
                <VendorAutocomplete
                  value={form.supplierName}
                  setValue={(v: any) => setField("supplierName", v)}
                  onSelect={(v: any) => setField("supplierName", v.name)}
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Invoice #</label>
                <input
                  className="input mt-1"
                  value={form.invoiceNumber}
                  onChange={(e) => setField("invoiceNumber", e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Department</label>
                <select
                  className="input mt-1"
                  value={form.department}
                  onChange={(e) => setField("department", e.target.value)}
                  required
                >
                  <option value="">Select...</option>
                  <option>ICT</option>
                  <option>HR</option>
                  <option>Finance</option>
                  <option>Procurement</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-400">Amount (KES)</label>
                <input
                  type="number"
                  className="input mt-1"
                  value={form.amount}
                  onChange={(e) => setField("amount", e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Invoice Upload</label>
                <UploadInvoice
                  onParsed={(p: any) => {
                    if (p.supplier) setField("supplierName", p.supplier);
                    if (p.invoiceNumber)
                      setField("invoiceNumber", p.invoiceNumber);
                    if (p.amount) setField("amount", String(p.amount));
                  }}
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Description</label>
                <textarea
                  className="input mt-1"
                  rows={3}
                  value={form.description}
                  onChange={(e) => setField("description", e.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 mt-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition"
              >
                {loading ? "Saving..." : "Save & Score"}
              </button>
            </form>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
