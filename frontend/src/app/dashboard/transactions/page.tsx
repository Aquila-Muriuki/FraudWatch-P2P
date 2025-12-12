"use client";

import { useEffect, useState } from "react";
import TransactionsTable from "./components/TransactionTable";
import NewTransactionDrawer from "./components/NewTransactionDrawere";
import TransactionViewDrawer from "./components/TransactionViewDrawer";
import DeptSpendChart from "./components/DeptSpendChart";
import { fetchTransactions, fetchDeptMetrics } from "./lib/api";
import { motion } from "framer-motion";

export default function TransactionsPage() {
  const [data, setData] = useState<any>(null);
  const [metrics, setMetrics] = useState<any[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const [viewOpen, setViewOpen] = useState(false);
  // Define a better type for selectedTx instead of 'any' if possible
  const [selectedTx, setSelectedTx] = useState<any | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const [tx, dept] = await Promise.all([
          fetchTransactions(1, 50),
          fetchDeptMetrics()
        ]);

        setData(tx);
        setMetrics(dept);
      } catch (err) {
        console.error("Failed loading dashboard:", err);
      }
    }

    load();
  }, [refreshKey]);

  return (
    <div className="p-6 space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <motion.h1 
          initial={{ y: -6, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          className="text-3xl font-bold"
        >
          Transactions
        </motion.h1>

        <button 
          onClick={() => setDrawerOpen(true)}
          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700"
        >
          New Transaction
        </button>
      </div>

      {/* Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div className="col-span-2">
          <div className="bg-black/20 border border-white/7 rounded-xl p-4">
            <h3 className="text-sm text-slate-300 mb-2">Department Spend</h3>
            <DeptSpendChart data={metrics} />
          </div>
        </div>

        <div className="bg-black/20 border border-white/7 rounded-xl p-4">
          <h3 className="text-sm text-slate-300 mb-2">Stats</h3>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-slate-400">Total transactions</span>
              <span className="font-semibold">{data?.total ?? "—"}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-sm text-slate-400">Pending</span>
              <span className="font-semibold">
                {(data?.items ?? []).filter((t: any) => t.status === "PENDING").length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-black/20 border border-white/7 rounded-xl p-4">
        {data ? (
          <TransactionsTable 
            data={data.items}
            refresh={() => setRefreshKey(k => k + 1)} 
            onView={(tx: any) => {
              setSelectedTx(tx);
              setViewOpen(true);
            }}
          />
        ) : (
          <div className="py-20 grid place-items-center text-slate-400">
            Loading transactions…
          </div>
        )}
      </div>

      {/* Drawer: New Transaction */}
      <NewTransactionDrawer 
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onCreated={(tx) => {
          setDrawerOpen(false);
          setSelectedTx(tx);
          setViewOpen(true);
          setRefreshKey(k => k + 1);
        }}
      />

      {/* View Drawer */}
      {selectedTx && (
        <TransactionViewDrawer
          open={viewOpen}
          onClose={() => setViewOpen(false)}
          txData={selectedTx} 
        />
      )}
    </div>
  );
}
