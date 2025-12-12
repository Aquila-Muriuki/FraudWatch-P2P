import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { getPrisma } from "@core/prisma/prismaClient";

export const transactions = new Hono<{
  Bindings: {
    WORKER_URL: string;
    DATABASE_URL: string;
  };
}>();

// ---------- Zod Schema ----------
const createTxSchema = z.object({
  supplierName: z.string(),
  invoiceNumber: z.string().optional(),
  department: z.string().optional(),
  amount: z.number().positive(),
  rawPayload: z.record(z.string(), z.any()).optional(),
});

// ---------- POST /transactions ----------
transactions.post("/create", zValidator("json", createTxSchema), async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const body = c.req.valid("json");

  const tx = await prisma.transaction.create({
    data: {
      supplierName: body.supplierName,
      invoiceNumber: body.invoiceNumber ?? null,
      department: body.department ?? null,
      amount: body.amount,
      rawPayload: body.rawPayload || {},
      status: "PENDING", // worker will update this
    },
  });

  // 📡 Worker trigger logic (non-blocking & reliable)
  try {
    await fetch(`${c.env.WORKER_URL}/worker/score`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ transactionId: tx.id }),
    });
  } catch (err) {
    // Don’t block API if worker offline, just log
    console.error("Worker trigger failed:", err);
  }

  return c.json({
    success: true,
    message: "Transaction received & scoring triggered",
    transactionId: tx.id,
    status: "PENDING",
  });
});

transactions.get("/:id", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const id = c.req.param("id");

  const tx = await prisma.transaction.findUnique({
    where: { id },
    include: {
      decisions: true,
    },
  });

  if (!tx) {
    return c.json({ error: "Transaction not found" }, 404);
  }

  return c.json(tx);
});






// ---------- GET /transactions ----------
transactions.get("/", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const url = new URL(c.req.url);

  const page = Number(url.searchParams.get("page") ?? "1");
  const limit = Number(url.searchParams.get("limit") ?? "30");
  const skip = (page - 1) * limit;

  const [items, total] = await Promise.all([
    prisma.transaction.findMany({
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
      select: {
        id: true,
        supplierName: true,
        amount: true,
        department: true,
        invoiceNumber: true,
        createdAt: true,
        status: true,
        decisions: {
          select: {
            score: true,
            riskLevel: true,
            status: true,
            flags: true,
         rulesTriggered: true,
        auditSnapshot: true,
       modelVersion: true,
        createdAt: true
          },
          orderBy: { createdAt: "desc" } 
        },
      },
    }),
    prisma.transaction.count(),
  ]);

  return c.json({
    page,
    limit,
    total,
    items,
  });
});
