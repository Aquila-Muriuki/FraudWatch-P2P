// apps/worker/src/index.ts (Conceptual Worker Code)

import { Env } from './bindings';
import { handlePolicyIngestion } from './processors/ingestPolicy';
import { handleTransactionScoring } from './processors/score';

// Define the structure of a message coming from the queue
interface QueueMessage {
  type: 'INGEST_POLICY' | 'BATCH_SCORE';
  payload: any;
}

// The worker entry point (handles multiple messages in a batch)
export default {
  async queue(batch: MessageBatch<QueueMessage>, env: Env, ctx: ExecutionContext): Promise<void> {
    
    // Process messages sequentially or in parallel
    for (const message of batch.messages) {
      const { type, payload } = message.body;

      try {
        if (type === 'INGEST_POLICY') {
          // This is a heavy task: Chunking, Embedding, and saving to Vector DB
          await handlePolicyIngestion(payload);
          message.ack(); // Acknowledge message if successful
          
        } else if (type === 'BATCH_SCORE') {
          // Score a large batch of historical transactions
          await handleTransactionScoring(payload);
          message.ack();
        } 
        
      } catch (error) {
        console.error(`Error processing ${type} message:`, error);
        // Do NOT acknowledge (ack) the message so it will be retried later
        // message.retry(); 
      }
    }
  },
};