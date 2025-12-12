import { Hono } from 'hono';
import { z, ZodSchema } from 'zod';
import { zValidator } from '@hono/zod-validator';
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
  rawPayload: z.record(z.string(), z.any()).optional(),
});

type TransactionPayload = z.infer<typeof transactionSchema>;

app.post(
  '/score',
  zValidator('json', transactionSchema as ZodSchema),
  async (c) => {
    try {
      const WORKER_URL = c.env.WORKER_URL;
      if (!WORKER_URL) {
        return c.json(
          { error: 'WORKER_URL missing in environment' },
          500
        );
      }

      const prisma = getPrisma(c.env.WORKER_URL);
      const payload = c.req.valid('json') as TransactionPayload;

      // ---- 1) Create transaction record ----
      const transaction = await prisma.transaction.create({
        data: {
          invoiceNumber: payload.invoiceNumber ?? null,
          supplierName: payload.supplierName,
          amount: payload.amount,
          department: payload.department ?? null,
          rawPayload: payload.rawPayload ?? {},
          status: 'PENDING',
        },
      });

      // ---- 2) Trigger worker scoring ----
      const response = await fetch(`${WORKER_URL}/score`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ transactionId: transaction.id }),
      }).catch((e) => {
        console.error('WORKER FAILED', e);
        return null;
      });

      // ---- 3) Return control immediately ----
      return c.json(
        {
          status: 'ENQUEUED',
          worker: response ? 'OK' : 'UNREACHABLE',
          transactionId: transaction.id,
        },
        202
      );
    } catch (error) {
      console.error('ERROR IN /score', error);
      return c.json({ error: 'Server failure' }, 500);
    }
  }
);

export default app;
