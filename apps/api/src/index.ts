// apps/api/src/index.ts

import { Hono } from 'hono';
import { cors } from 'hono/cors'; // Import the CORS middleware
// ... other imports ...
import scoringWorker from './routes/scoringWorker'; 
import { vendors } from "./routes/vendor";
import { metrics } from "./routes/metrics";

export const app = new Hono<{ Bindings: {
  WORKER_URL: string ,
  DATABASE_URL: string;
} }>();

// ---------------- GLOBAL MIDDLEWARE ----------------

app.use(
  '/*', // This applies CORS settings to ALL routes handled by 'app'
  cors({
    origin: ['http://localhost:3000', 'http://0.0.1:8787'], // Add all necessary frontend origins
    allowHeaders: ['Content-Type', 'Authorization'], // Add other headers if you use them
    allowMethods: ['POST', 'GET', 'OPTIONS'],
    maxAge: 600, // Cache preflight response
  })
);

// ---------------- Route Registration ----------------

app.route("/vendors", vendors);
app.route("/metrics", metrics);
app.route('/worker', scoringWorker); 

import riskRoute from './routes/risk';
import { transactions } from './routes/transcation'; 

app.route('/risk', riskRoute);
app.route('/api/transactions', transactions);

// ---------------- Health / Root Endpoint ----------------
app.get('/', (c) => {
  const databaseUrl = c.env?.DATABASE_URL;
  const status = databaseUrl ? "OK" : "DATABASE_URL Missing";
  return c.json({
    name: "FraudWatch API",
    status,
    databaseUrlLoaded: Boolean(databaseUrl),
    timestamp: new Date().toISOString()
  });
});

export default app;
