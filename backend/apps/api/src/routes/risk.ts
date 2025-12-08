import { Hono } from 'hono';
import { z, ZodSchema } from 'zod';
import { zValidator } from '@hono/zod-validator';

// 1. Import correct prisma getter (NOT global prisma)
import { getPrisma } from '@core/prisma/prismaClient';

interface Bindings {
  WORKER_URL: string;
}

const app = new Hono<{ Bindings: Bindings }>();

const transactionSchema = z.object({
  invoiceNumber: z.string().optional(),
  supplierName: z.string(),
  amount: z.number().positive(),
  department: z.string().optional(),
  rawPayload: z.record(z.string(), z.any()).optional()
});

// infer type BEFORE route
type TransactionPayload = z.infer<typeof transactionSchema>;

app.post('/score', zValidator('json', transactionSchema as ZodSchema), async (c) => {

  // 2. Access env safely
  const WORKER_URL = c.env.WORKER_URL;

  // 3. Get prisma instance per request
  const prisma = getPrisma();

  const payload = c.req.valid('json') as TransactionPayload;

  // 4. Create transaction
  const tx = await prisma.transaction.create({
    data: {
      invoiceNumber: payload.invoiceNumber ?? null,
      supplierName: payload.supplierName,
      amount: payload.amount,
      department: payload.department ?? null,
      rawPayload: payload.rawPayload || {}
    }
  });

  // 5. Dispatch job
  const workerEndpoint = `${WORKER_URL}/score`;

  await fetch(workerEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ transactionId: tx.id })
  });

  return c.json({ status: 'ENQUEUED', transactionId: tx.id }, 202);
});

export default app;
