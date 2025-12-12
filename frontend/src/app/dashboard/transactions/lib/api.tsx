"use client";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// -------------------------------
// CREATE TRANSACTION
// -------------------------------
export async function createTransaction(data: any) {
  const res = await fetch(`${BASE_URL}/api/transactions/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("❌ Failed to create transaction:", await res.text());
    throw new Error("Failed to create transaction");
  }

  return res.json();
}

export async function getTransactionById(id: string) {
  const res = await fetch(`${BASE_URL}/api/transactions/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("❌ Failed to load transaction:", await res.text());
    throw new Error("Failed to load transaction by ID");
  }

  return res.json();
}
// -------------------------------
// PAGINATED TRANSACTIONS
// -------------------------------
export async function fetchTransactions(page = 1, limit = 50) {
  const url = `${BASE_URL}/api/transactions?page=${page}&limit=${limit}`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    console.error("❌ Failed to load paginated transactions");
    throw new Error("Failed to load transactions");
  }

  return res.json();
}

// -------------------------------
// FULL LIST (NO PAGINATION)
// -------------------------------
export async function getTransactions() {
  const res = await fetch(`${BASE_URL}/api/transactions`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch transactions");

  return res.json();
}
// -------------------------------
// DEPARTMENT METRICS
// -------------------------------
export async function fetchDeptMetrics() {
  const res = await fetch(`${BASE_URL}/metrics/department`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to load department metrics");

  return res.json();
}
