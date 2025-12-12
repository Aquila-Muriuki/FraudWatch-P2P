-- CreateTable
CREATE TABLE "transactions" (
    "id" UUID NOT NULL,
    "invoiceNumber" TEXT,
    "supplierName" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "department" TEXT,
    "rawPayload" JSONB,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "processedAt" TIMESTAMP(3),

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "decisions" (
    "id" UUID NOT NULL,
    "transactionId" UUID NOT NULL,
    "score" INTEGER NOT NULL,
    "riskLevel" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "flags" JSONB,
    "rulesTriggered" JSONB,
    "auditSnapshot" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "decisions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rules" (
    "id" UUID NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "severity" INTEGER NOT NULL DEFAULT 10,
    "ruleType" TEXT NOT NULL,
    "payload" JSONB,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "rules_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "decisions_transactionId_key" ON "decisions"("transactionId");

-- CreateIndex
CREATE UNIQUE INDEX "rules_code_key" ON "rules"("code");

-- AddForeignKey
ALTER TABLE "decisions" ADD CONSTRAINT "decisions_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "transactions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
