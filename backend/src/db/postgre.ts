import { Pool } from 'pg'; // Standard Node.js PostgreSQL client
import { Transaction } from './schema';

// --- Configuration Setup (Conceptual for Supabase) ---
// In a real environment, you would get this connection string from your 
// Supabase Project Settings -> Database -> Connection String (e.g., Pooler URI).
// NOTE: We assume this variable is securely loaded from environment configuration.
const connectionString = process.env.DATABASE_URL || 'postgresql://user:password@host:5432/ai_auditor_db';

/**
 * PostgreSQL Connection Pool. This pool will connect to the Supabase database
 * using the standard PostgreSQL protocol.
 */
const pool = new Pool({
  connectionString: connectionString,
  // Optional: Add ssl configuration if connecting from external environment
  // ssl: { rejectUnauthorized: false }
});

/**
 * Saves the comprehensive audit result (P2P data + AI verdicts) into the 
 * 'transactions' table.
 * @param data The complete Transaction object.
 */
export async function saveAuditResult(data: Transaction): Promise<void> {
  const { 
    invoice_id, supplier_id, amount, procurement_method, 
    anomaly_score, is_compliant, violating_clause, threat_engine_flag 
  } = data;

  const query = `
    INSERT INTO transactions (
      invoice_id, supplier_id, amount, procurement_method, 
      anomaly_score, is_compliant, violating_clause, threat_engine_flag, timestamp
    ) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW())
    ON CONFLICT (invoice_id) 
    DO UPDATE SET 
      anomaly_score = EXCLUDED.anomaly_score,
      is_compliant = EXCLUDED.is_compliant,
      violating_clause = EXCLUDED.violating_clause,
      threat_engine_flag = EXCLUDED.threat_engine_flag,
      timestamp = NOW();
  `;

  const values = [
    invoice_id, supplier_id, amount, procurement_method, 
    anomaly_score, is_compliant, violating_clause, threat_engine_flag
  ];

  try {
    await pool.query(query, values);
    console.log(`Successfully saved audit result for Invoice ID: ${invoice_id}`);
  } catch (error) {
    console.error(`Error saving audit result for ${invoice_id}:`, error);
    throw new Error("Database transaction failed.");
  }
}

/**
 * Retrieves a summary report of flagged transactions.
 * (Conceptual function for generating the dashboard stream data)
 */
export async function getReportsSummary(limit: number = 20): Promise<Partial<Transaction>[]> {
  const query = `
    SELECT invoice_id, amount, anomaly_score, is_compliant, violating_clause
    FROM transactions
    ORDER BY anomaly_score DESC, timestamp DESC
    LIMIT $1;
  `;
  
  try {
    const result = await pool.query(query, [limit]);
    return result.rows;
  } catch (error) {
    console.error("Error fetching reports summary:", error);
    return [];
  }
}