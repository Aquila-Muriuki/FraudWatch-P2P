import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.rule.create({
    data: {
      code: 'DELEG_LIMIT',
      description: 'Delegated limit by dept',
      severity: 50,
      ruleType: 'threshold',
      payload: {
        field: 'amount',
        limitByDept: { ICT: 200000, FINANCE: 1500000 },
        legalRef: 'PFM Act Sec 149(2)'
      },
      active: true
    }
  });

  await prisma.rule.create({
    data: {
      code: 'MISSING_QUOTE',
      description: 'Missing quotes above threshold',
      severity: 20,
      ruleType: 'custom',
      payload: { threshold: 100000, legalRef: 'PPDA Reg 34' },
      active: true
    }
  });

  console.log('seeded rules');
}

main().catch(console.error).finally(()=>process.exit());
