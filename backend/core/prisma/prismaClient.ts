import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

export function getPrisma() {
  return new PrismaClient().$extends(withAccelerate());
}
