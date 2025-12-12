export async function submitTransaction(payload: any) {
  const res = await fetch("http://localhost:8787/transactions/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!res.ok) throw new Error("Failed to submit transaction");
  return res.json();
}

export async function getDecisions() {
  const res = await fetch("http://localhost:8787/decisions", {
    next: { revalidate: 5 }
  });

  if (!res.ok) throw new Error("Failed to load decisions");
  return res.json();
}

export async function getDecision(id: string) {
  const res = await fetch(`http://localhost:8787/decisions/${id}`);

  if (!res.ok) throw new Error("Failed to load decision details");
  return res.json();
}
