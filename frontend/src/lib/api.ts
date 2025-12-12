export async function apiFetch(
  path: string,
  options: RequestInit = {}
) {
  const base = process.env.NEXT_PUBLIC_API_URL;
  if (!base) {
    throw new Error(
      "❌ NEXT_PUBLIC_API_URL is missing. Set it in `.env.local`"
    );
  }

  const res = await fetch(`${base}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API Error ${res.status}: ${text}`);
  }

  return res.json();
}
