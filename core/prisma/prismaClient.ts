// @core/prisma/prismaClient.ts
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

export function getPrisma(databaseUrl: string) {
    if (!databaseUrl) {
        throw new Error("DATABASE_URL must be provided to initialize Prisma Client.");
    }

    const options = {
        accelerateUrl: databaseUrl, 
    };

    return new PrismaClient(options).$extends(withAccelerate());
}

export type ExtendedPrismaClient = ReturnType<typeof getPrisma>;
