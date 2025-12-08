// core/database/prismaClient.ts (The Corrected Version)

import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  // 💡 SOLUTION: Explicitly define the type for __prisma here
  var __prisma: PrismaClient | undefined; 
}

export const prisma =
  global.__prisma ??
  new PrismaClient();

if (process.env.NODE_ENV !== 'production') global.__prisma = prisma;