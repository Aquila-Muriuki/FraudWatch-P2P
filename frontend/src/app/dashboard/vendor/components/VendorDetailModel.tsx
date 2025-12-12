"use client";

import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Transaction {
  id: string;
  invoiceNumber?: string;
  amount: number;
  status: string;
  createdAt: string;
}

interface VendorDetailModalProps {
  vendorId: string;
  onClose: () => void;
}

export default function VendorDetailModal({ vendorId, onClose }: VendorDetailModalProps) {
  const [vendor, setVendor] = useState<any>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<HTMLTableRowElement[]>([]);

  // Fetch vendor data
  useEffect(() => {
    const fetchVendor = async () => {
      try {
        const res = await axios.get(`/vendors/${vendorId}`);
        setVendor(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchVendor();
  }, [vendorId]);

  // Modal enter animation
  useEffect(() => {
    if (modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { y: -50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
      );
    }
  }, [vendor]);

  // Animate transaction rows with ScrollTrigger
  useEffect(() => {
    if (vendor && rowsRef.current.length > 0) {
      rowsRef.current.forEach((row) => {
        gsap.fromTo(
          row,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row,
              start: "top 90%",
              toggleActions: "play none none none", // play once
            },
          }
        );
      });
    }
  }, [vendor]);

  if (!vendor) return null;

  const closeModal = () => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        y: -50,
        scale: 0.95,
        duration: 0.3,
        ease: "power3.in",
        onComplete: onClose,
      });
    } else {
      onClose();
    }
  };

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && closeModal()}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-16 sm:pt-20 z-50 overflow-auto"
    >
      <div
        ref={(el) => { modalRef.current = el; }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-4xl shadow-lg relative mx-4 sm:mx-0"
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 font-bold text-xl"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">{vendor.name}</h2>
        <p className="mb-2 text-gray-700 dark:text-gray-300">Email: {vendor.email || "-"}</p>
        <p className="mb-2 text-gray-700 dark:text-gray-300">Phone: {vendor.phone || "-"}</p>
        <p className="mb-2 text-gray-700 dark:text-gray-300">Category: {vendor.category || "-"}</p>
        <p className="mb-2 text-gray-700 dark:text-gray-300">Risk Score: {vendor.riskScore}</p>

        <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">Transactions</h3>
        <div className="overflow-x-auto max-h-96">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="border px-3 py-1 text-left">Invoice</th>
                <th className="border px-3 py-1 text-left">Amount</th>
                <th className="border px-3 py-1 text-left">Status</th>
                <th className="border px-3 py-1 text-left">Created At</th>
              </tr>
            </thead>
            <tbody>
              {vendor.transactions.map((t: Transaction, idx: number) => (
                <tr
                  key={t.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer"
                  ref={(el) => { if (el) rowsRef.current[idx] = el; }}
                >
                  <td className="border px-3 py-1">{t.invoiceNumber || "-"}</td>
                  <td className="border px-3 py-1">{t.amount.toLocaleString()}</td>
                  <td className="border px-3 py-1">{t.status}</td>
                  <td className="border px-3 py-1">{new Date(t.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
