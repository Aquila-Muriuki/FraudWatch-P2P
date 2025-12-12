import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { getPrisma } from "@core/prisma/prismaClient";

export const vendors = new Hono<{
  Bindings: { DATABASE_URL: string };
}>();

// Create Vendor Schema
const vendorSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
  category: z.string().optional(),
});

// ---------- POST /vendors ----------
vendors.post("/create", zValidator("json", vendorSchema), async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const body = c.req.valid("json");

  const vendor = await prisma.vendor.create({
    data: { ...body },
  });

  return c.json({ success: true, vendor });
});

// ---------- GET /vendors?query=abc ----------
vendors.get("/", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);

  const query = c.req.query("query") || "";

  const results = await prisma.vendor.findMany({
    where: {
      name: { contains: query, mode: "insensitive" },
    },
    select: {
      id: true,
      name: true,
      riskScore: true,
    },
    orderBy: { name: "asc" },
    take: 20,
  });

  return c.json(results);
});

// ---------- GET /vendors/:id ----------
vendors.get("/:id", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const id = c.req.param("id");

  const vendor = await prisma.vendor.findUnique({
    where: { id },
    include: { transactions: true },
  });

  if (!vendor) return c.json({ error: "Vendor not found" }, 404);

  return c.json(vendor);
});
