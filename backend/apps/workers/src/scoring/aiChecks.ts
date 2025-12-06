import { prisma } from '../prisma';
import { jaroWinkler, tokenJaccard, normalizeText } from './';

// AI checks return a list of flags with points (0-40 combined)
export async function runAIChecks(transaction: any) {
  const flags: any[] = [];
  let aiPoints = 0;

  // 1) Duplicate fuzzy search: look for recent invoices with same supplier or similar invoice number
  // Query last 500 transactions from same supplier first
  const recent = await prisma.transaction.findMany({
    where: { supplierName: transaction.supplierName },
    orderBy: { createdAt: 'desc' },
    take: 200
  });

  for (const r of recent) {
    // compare invoice numbers, amounts, and text tokens
    const jaro = jaroWinkler(transaction.invoiceNumber || '', r.invoiceNumber || '');
    const tokenSim = tokenJaccard(transaction.rawText || transaction.invoiceNumber || '', r.rawPayload?.invoiceText || r.invoiceNumber || '');
    const amountMatch = Math.abs(transaction.amount - r.amount) < 1e-6; // exact amount match
    // scoring heuristic
    let localScore = 0;
    if (jaro > 0.92 && amountMatch) localScore += 20;
    else if (jaro > 0.85 && amountMatch) localScore += 15;
    else if (tokenSim > 0.8 && amountMatch) localScore += 12;
    else if (tokenSim > 0.85 && Math.abs(transaction.amount - r.amount) / Math.max(1, r.amount) < 0.01) localScore += 10;

    if (localScore > 0) {
      flags.push({
        name: 'DUPLICATE_SIMILAR',
        message: `Possible duplicate with transaction ${r.id}`,
        evidence: { compareInvoice: r.invoiceNumber, jaro, tokenSim, rAmount: r.amount },
        points: localScore
      });
      aiPoints += localScore;
    }
    if (aiPoints >= 40) break;
  }

  // 2) Heuristic anomaly: amount >> supplier mean
  const histAgg = await prisma.transaction.aggregate({
    _avg: { amount: true },
    where: { supplierName: transaction.supplierName }
  });

  const avg = histAgg._avg?.amount ?? 0;
  if (avg > 0 && transaction.amount > avg * 3) {
    const pts = 12;
    flags.push({ name: 'ANOMALOUS_AMOUNT', message: `Amount ${transaction.amount} is >3x supplier avg ${avg}`, points: pts, evidence: { avg } });
    aiPoints += pts;
  } else if (avg > 0 && transaction.amount > avg * 1.6) {
    const pts = 6;
    flags.push({ name: 'AMOUNT_HIGH', message: `Amount ${transaction.amount} >1.6x supplier avg ${avg}`, points: pts, evidence: { avg } });
    aiPoints += pts;
  }

  // 3) Simple fraud indicator: amount > ad-hoc very large threshold -> increase AI weight
  if (transaction.amount > 2_000_000) { flags.push({ name: 'VERY_LARGE', message: 'Very large payment', points: 8 }); aiPoints += 8; }

  aiPoints = Math.min(aiPoints, 40);
  return { flags, aiPoints };
}
