// src/index.ts

import { Hono } from 'hono'
import { env } from 'hono/adapter'

// 1. Setup the main Hono application instance
const app = new Hono()

// 2. Load the risk-scoring route logic
import riskRoute from './routes/risk' // We will create this next

// 3. Register the risk route handler under the '/risk' path
app.route('/', riskRoute) 

// 4. Default handler for root path (optional)
app.get('/', (c) => {
  const { DATABASE_URL } = env<{ DATABASE_URL: string }>(c);
  const dbStatus = DATABASE_URL ? "Database URL Loaded" : "Database URL Missing";
  return c.text(`FraudWatch API is running. Status: ${dbStatus}`);
})

// 5. Export the Hono app for Wrangler
export default app