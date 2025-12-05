// db schma.ts


//database schema definitions would go here

// For example, defining tables for storing policy documents, transaction audits, etc.;

import { pgTable, text, integer, serial, timestamp, boolean, float } from "drizzle-orm/pg-core";

import { relations } from "drizzle-orm";


export const policyDocuments = pgTable("policy_documents", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});


export const transactionAudits = pgTable("transaction_audits", {
  id: serial("id").primaryKey(),
  invoiceId: text("invoice_id").notNull(),



    supplierId: text("supplier_id").notNull(),

    amount: float("amount").notNull(),
});


    department: text("department").notNull(),
    anomalyScore: float("anomaly_score").notNull(),
    complianceVerdict: boolean("compliance_verdict").notNull(),
    violatingClause: text("violating_clause").nullable(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});