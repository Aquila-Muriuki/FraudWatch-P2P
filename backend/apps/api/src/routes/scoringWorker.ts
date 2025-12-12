// apps/api/src/routes/scoringWorker.ts

import { handleScoringRequest } from '@core/src/scoreService';
import { Hono } from 'hono';


interface WorkerBindings {
  DATABASE_URL: string;

}

const scoringWorker = new Hono<{ Bindings: WorkerBindings }>();

scoringWorker.post('/score', async (c) => {
  const body = await c.req.json();
  

  const databaseUrl = c.env.DATABASE_URL; 

  
  try {
    const result = await handleScoringRequest(body.transactionId, databaseUrl);
    return c.json(result);
  } catch (error) {
    // Check if the caught item is a standard Error object
    if (error instanceof Error) {
      if (error.message === 'Missing transactionId') {
        return c.json({ error: 'Missing transactionId' }, 400);
      }
      // Access error.message safely here
      return c.json({ error: error.message }, 500);
    } 
    
    // Handle cases where something totally unexpected (like 'throw "some string"') was thrown
    return c.json({ error: 'An unknown error occurred' }, 500);
  }
});


export default scoringWorker;
