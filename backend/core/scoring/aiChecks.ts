// core/scoring/aiChecks.ts
import { jaroWinkler, tokenJaccard } from './utils/similarity';
import { PrismaClient } from '@prisma/client/edge';

// Note: we'll create a prisma instance inside worker; function expects a prisma client param to avoid instantiation here
export async function runAIChecks(tx: any, prisma: PrismaClient) {
  const flags: any[] = [];
  let aiPoints = 0;

  // 1) Duplicate fuzzy: recent transactions from same supplier (limit 200)
  const recent = await prisma.transaction.findMany({
    where: { supplierName: tx.supplierName },
    orderBy: { createdAt: 'desc' },
    take: 200
  });

  for (const r of recent) {
    const jaro = jaroWinkler(tx.invoiceNumber ?? '', r.invoiceNumber ?? '');
    const tokenSim = tokenJaccard(tx.rawPayload?.invoiceText ?? tx.invoiceNumber ?? '', r.rawPayload?.invoiceText ?? r.invoiceNumber ?? '');
    const amountMatch = Math.abs((tx.amount ?? 0) - (r.amount ?? 0)) < 1e-6;

    let local = 0;
    if (jaro > 0.92 && amountMatch) local += 20;
    else if (jaro > 0.85 && amountMatch) local += 15;
    else if (tokenSim > 0.8 && amountMatch) local += 12;
    else if (tokenSim > 0.85 && Math.abs((tx.amount - r.amount) / Math.max(1, r.amount)) < 0.01) local += 10;

    if (local > 0) {
      flags.push({
        name: 'DUPLICATE_SIMILAR',
        message: `Possible duplicate with transaction ${r.id}`,
        evidence: { compareInvoice: r.invoiceNumber, jaro, tokenSim, rAmount: r.amount },
        points: local
      });
      aiPoints += local;
    }
    if (aiPoints >= 40) break;
  }

  // 2) Supplier average anomaly
  const agg = await prisma.transaction.aggregate({
    _avg: { amount: true },
    where: { supplierName: tx.supplierName }
  });
  const avg = agg._avg?.amount ?? 0;
  if (avg > 0 && tx.amount > avg * 3) {
    const pts = 12;
    flags.push({ name: 'ANOMALOUS_AMOUNT', message: `Amount ${tx.amount} is >3x supplier avg ${avg}`, points: pts, evidence: { avg } });
    aiPoints += pts;
  } else if (avg > 0 && tx.amount > avg * 1.6) {
    const pts = 6;
    flags.push({ name: 'AMOUNT_HIGH', message: `Amount ${tx.amount} >1.6x supplier avg ${avg}`, points: pts, evidence: { avg } });
    aiPoints += pts;
  }

  // 3) Very large payments
  if ((tx.amount ?? 0) > 2_000_000) {
    flags.push({ name: 'VERY_LARGE', message: 'Very large payment', points: 8 });
    aiPoints += 8;
  }

  aiPoints = Math.min(aiPoints, 40);
  return { flags, aiPoints };
}
