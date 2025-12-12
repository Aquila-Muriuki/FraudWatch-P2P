// apps/worker/src/index.ts

import { Hono } from 'hono'
import { processScoreJob } from './processors/score'
import { getPrisma } from '@core/prisma/prismaClient'

interface Bindings {
  DATABASE_URL: string; // Ensure this is defined
}



const app = new Hono<{ Bindings: Bindings }>()

app.post('/worker/score', async (c) => {

  // FIX: Pass the environment variable to the getPrisma function
  const prisma = getPrisma(c.env.DATABASE_URL); 

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
