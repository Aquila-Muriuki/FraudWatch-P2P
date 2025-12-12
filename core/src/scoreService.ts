// backend/core/src/scoreService.ts

// Make sure processScoreJob and getPrisma are imported or defined here
import { processScoreJob } from '@worker/processors/score'; 
import { getPrisma } from '@core/prisma/prismaClient';

export async function handleScoringRequest(transactionId: string, databaseUrl: string) {
    if (!transactionId) {
        throw new Error('Missing transactionId');
    }
    const prisma = getPrisma(databaseUrl);
    // Assuming processScoreJob returns a promise with the result
    const result = await processScoreJob(prisma, { transactionId });
    return result;
}
