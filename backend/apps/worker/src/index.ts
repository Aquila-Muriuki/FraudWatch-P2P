// apps/worker/src/index.ts

import { Hono } from 'hono'
import { processScoreJob } from './processors/score'
import { getPrisma } from '@core/prisma/prismaClient'

interface Bindings {
  DATABASE_URL: string;
}

const app = new Hono<{ Bindings: Bindings }>()

app.post('/worker/score', async (c) => {

  // Prisma must be initialized inside the request
  const prisma = getPrisma();

  const body = await c.req.json();

  if (!body || typeof body.transactionId !== 'string') {
    return c.json({ error: 'Missing transactionId in job body' }, 400);
  }

  // Process worker job
  const resp = await processScoreJob(prisma, body);

  return c.json(resp);
});

export default {
  fetch: app.fetch
};
