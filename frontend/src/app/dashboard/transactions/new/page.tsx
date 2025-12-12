"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NewTransaction() {
  const [form, setForm] = useState({
    supplierName: "",
    invoiceNumber: "",
    department: "",
    amount: "",
    description: "",
  });

  const [risk, setRisk] = useState<"LOW" | "MID" | "HIGH" | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  // ------------------ LIVE RISK ENGINE ------------------
  useEffect(() => {
    const amt = Number(form.amount);
    if (!amt) return setRisk(null);

    if (amt < 5000) return setRisk("LOW");
    if (amt < 100000) return setRisk("MID");
    return setRisk("HIGH");
  }, [form.amount]);

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  async function submit(e: any) {
    e.preventDefault();
    setSubmitting(true);

    const body = {
      ...form,
      amount: Number(form.amount),
    };

    const res = await fetch("/api/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      setDone(true);
      setForm({
        supplierName: "",
        invoiceNumber: "",
        department: "",
        amount: "",
        description: "",
      });
      setTimeout(() => setDone(false), 2000);
    }

    setSubmitting(false);
  }

  return (
    <motion.div
      className="max-w-2xl mx-auto p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Capture Transaction
      </motion.h1>

      <motion.form
        onSubmit={submit}
        className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 space-y-5 shadow-xl"
      >

        {/* Supplier */}
        <Field label="Supplier Name">
          <input
            name="supplierName"
            required
            value={form.supplierName}
            onChange={handleChange}
            className="input"
          />
        </Field>

        {/* Invoice */}
        <Field label="Invoice Number">
          <input
            name="invoiceNumber"
            required
            value={form.invoiceNumber}
            onChange={handleChange}
            className="input"
          />
        </Field>

        {/* Department */}
        <Field label="Department">
          <select
            name="department"
            required
            value={form.department}
            onChange={handleChange}
            className="input"
          >
            <option value="">Choose...</option>
            <option>ICT</option>
            <option>Finance</option>
            <option>HR</option>
            <option>Procurement</option>
          </select>
        </Field>

        {/* Amount */}
        <Field label="Amount (KES)">
          <input
            name="amount"
            type="number"
            min="1"
            required
            value={form.amount}
            onChange={handleChange}
            className="input"
          />
        </Field>

        {/* RISK INDICATOR */}
        <AnimatePresence mode="wait">
          {risk && (
            <motion.div
              key={risk}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              className={`
                px-3 py-2 rounded-lg text-sm font-medium border
                ${
                  risk === "LOW"
                    ? "bg-green-500/20 text-green-300 border-green-500/30"
                    : risk === "MID"
                    ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                    : "bg-red-500/20 text-red-300 border-red-500/30"
                }
              `}
            >
              Risk Prediction: {risk}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Description */}
        <Field label="Description (Optional)">
          <textarea
            name="description"
            rows={3}
            value={form.description}
            onChange={handleChange}
            className="input"
          />
        </Field>

        {/* SUBMIT BUTTON */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          disabled={submitting}
          className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-slate-800"
        >
          {submitting ? "Processing..." : "Submit"}
        </motion.button>
      </motion.form>

      {/* SUCCESS */}
      <AnimatePresence>
        {done && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="mt-4 bg-green-500/20 text-green-300 border border-green-600/30 rounded-xl p-3 text-center"
          >
            ✔ Transaction Saved
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* Helper: beautified field wrapper */
function Field({ label, children }: any) {
  return (
    <div>
      <label className="block text-sm text-slate-400 mb-1">{label}</label>
      {children}
    </div>
  );
}
