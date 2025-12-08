//jaro winkler and token jaccard similarity functions 
// core/scoring/utils/similarity.ts
export function normalizeText(s?: string): string {
  if (!s) return '';
  return s.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

// Jaro-Winkler implementation (compact, edge-friendly)
export function jaroWinkler(s1?: string, s2?: string): number {
  s1 = normalizeText(s1);
  s2 = normalizeText(s2);
  if (s1 === s2) return 1;
  const len1 = s1.length, len2 = s2.length;
  if (len1 === 0 || len2 === 0) return 0;
  const matchDist = Math.floor(Math.max(len1, len2) / 2) - 1;
  const s1Matches = new Array(len1).fill(false);
  const s2Matches = new Array(len2).fill(false);
  let matches = 0;
  for (let i = 0; i < len1; i++) {
    const start = Math.max(0, i - matchDist);
    const end = Math.min(i + matchDist + 1, len2);
    for (let j = start; j < end; j++) {
      if (s2Matches[j]) continue;
      if (s1[i] !== s2[j]) continue;
      s1Matches[i] = true;
      s2Matches[j] = true;
      matches++;
      break;
    }
  }
  if (matches === 0) return 0;
  let t = 0, k = 0;
  for (let i = 0; i < len1; i++) {
    if (!s1Matches[i]) continue;
    while (!s2Matches[k]) k++;
    if (s1[i] !== s2[k]) t++;
    k++;
  }
  t = t / 2;
  const m = matches;
  const jaro = (m / len1 + m / len2 + (m - t) / m) / 3;
  let l = 0;
  const prefixLimit = 4;
  for (let i = 0; i < Math.min(prefixLimit, len1, len2); i++) {
    if (s1[i] === s2[i]) l++;
    else break;
  }
  const p = 0.1;
  return jaro + l * p * (1 - jaro);
}

export function tokenJaccard(a?: string, b?: string): number {
  const na = normalizeText(a).split(' ').filter(Boolean);
  const nb = normalizeText(b).split(' ').filter(Boolean);
  const sa = new Set(na);
  const sb = new Set(nb);
  const inter = new Set([...sa].filter(x => sb.has(x)));
  const union = new Set([...sa, ...sb]);
  if (union.size === 0) return 0;
  return inter.size / union.size;
}
