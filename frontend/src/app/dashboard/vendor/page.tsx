// app/components/VendorsPage.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

type Vendor = {
  id: string;
  name: string;
  riskScore: number;
  email?: string;
  phone?: string;
  address?: string;
  category?: string;
};

type Transaction = {
  id: string;
  invoiceNumber?: string;
  amount: number;
  department?: string;
  status: string;
};

export default function VendorsPage() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const rowsRef = useRef<HTMLTableRowElement[]>([]);

  const fetchVendors = async () => {
    try {
      const res = await axios.get("/api/vendors");
      setVendors(res.data);
    } catch (e) {
      console.error("Failed to fetch vendors", e);
    }
  };

  const fetchTransactions = async (vendorId: string) => {
    try {
      const res = await axios.get(`/api/vendors/${vendorId}`);
      setTransactions(res.data.transactions || []);
    } catch (e) {
      console.error("Failed to fetch transactions", e);
    }
  };

  const openModal = (vendor: Vendor) => {
    setSelectedVendor(vendor);
    fetchTransactions(vendor.id);
  };

  const closeModal = () => {
    setSelectedVendor(null);
    setTransactions([]);
  };

  useEffect(() => {
    fetchVendors();
  }, []);

  // Animate vendor cards on scroll
  useEffect(() => {
    cardsRef.current.forEach((el, idx) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: idx * 0.1,
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            },
          }
        );
      }
    });
  }, [vendors]);

  // Animate table rows inside modal
  useEffect(() => {
    rowsRef.current.forEach((el, idx) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            delay: idx * 0.05,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            },
          }
        );
      }
    });
  }, [transactions]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Vendors</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vendors.map((vendor, idx) => (
          <motion.div
            key={vendor.id}
            ref={(el) => {
              if (el) cardsRef.current[idx] = el;
            }}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow cursor-pointer hover:shadow-lg transition"
            onClick={() => openModal(vendor)}
          >
            <h2 className="font-semibold text-lg">{vendor.name}</h2>
            <p>Risk Score: {vendor.riskScore}</p>
            {vendor.category && <p>Category: {vendor.category}</p>}
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedVendor && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg w-11/12 md:w-3/4 max-h-[80vh] overflow-y-auto relative">
            <button
              className="absolute top-3 right-3 font-bold text-xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">{selectedVendor.name} - Transactions</h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b p-2">Invoice #</th>
                  <th className="border-b p-2">Amount</th>
                  <th className="border-b p-2">Department</th>
                  <th className="border-b p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx, idx) => (
                  <tr
                    key={tx.id}
                    ref={(el) => {
                      if (el) rowsRef.current[idx] = el;
                    }}
                    className="border-b hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    <td className="p-2">{tx.invoiceNumber}</td>
                    <td className="p-2">{tx.amount.toLocaleString()}</td>
                    <td className="p-2">{tx.department}</td>
                    <td className="p-2">{tx.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
