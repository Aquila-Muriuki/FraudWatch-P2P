import { Hono } from "hono";
import { getPrisma } from "@core/prisma/prismaClient";

export const metrics = new Hono<{
  Bindings: { DATABASE_URL: string };
}>();

// ---------- GET /metrics/departments ----------
metrics.get("/department", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);

  const grouped = await prisma.transaction.groupBy({
    by: ["department"],
    _sum: { amount: true },
    orderBy: { _sum: { amount: "desc" } },
  });

  return c.json(grouped);
});

// ---------- GET /metrics/overview ----------
metrics.get("/overview", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);

  const [total, approved, flagged, highRisk] = await Promise.all([
    prisma.transaction.count(),
    prisma.transaction.count({ where: { status: "OK" } }),
    prisma.transaction.count({ where: { status: "REVIEW" } }),
    prisma.decision.count({ where: { riskLevel: "HIGH" } }),
  ]);

  return c.json({
    totalTransactions: total,
    approved,
    flagged,
    highRisk,
  });
});

// ---------- GET /metrics/top-vendors ----------
metrics.get("/top-vendors", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);

  const data = await prisma.vendor.findMany({
    orderBy: { riskScore: "desc" },
    take: 10,
    select: {
      id: true,
      name: true,
      riskScore: true,
    },
  });

  return c.json(data);
});

// ---------- GET /metrics/departments/trend ----------
metrics.get("/departments/trend", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);

  const data = await prisma.transaction.groupBy({
    by: ["department"],
    _sum: { amount: true },
  });

  return c.json(data);
});
