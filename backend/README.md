FraudWatch P2P — backend Real-Time Fraud Scoring Engine

FraudWatch is a Cloudflare Workers + Prisma + Supabase powered fraud detection system built for instant scoring of invoices, suppliers, and procurement transactions.

The API validates transactions, stores them, runs rule-based fraud scoring, and exposes real-time risk analysis.

---

## 🚀 Architecture

| Component | Technology |
|----------|------------|
| Runtime  | Cloudflare Workers (serverless) |
| API Framework | Hono |
| Database | Postgres (Supabase) |
| ORM | Prisma 7 (Edge Adapter) |
| Queue | Worker-triggered async processing |

---

## ✨ Features

- 🔍 Rule-driven fraud scoring
- 🧮 Weighted risk scoring model
- 🪝 Background worker processing
- 🧾 Full audit trail & decision log
- 🔄 Real-time fraud risk API
- 🧰 Cloud-native scaling

---

## 📂 Project Directory

apps/
└─ api/
├─ src/
│ ├─ routes/
│ │ └─ risk.ts
│ ├─ processors/
│ │ └─ score.ts
│ └─ index.ts
├─ prisma/
│ └─ schema.prisma
├─ wrangler.toml
└─ package.json

yaml
Copy code

---

## 🖥️ Running Locally

### Install dependencies
```bash
pnpm install
Apply Prisma and database
bash
Copy code
pnpm prisma generate
pnpm prisma migrate dev
Start worker
bash
Copy code
pnpm dev
🌐 API Endpoints
➕ Submit transaction for scoring
POST /score

json
Copy code
{
  "invoiceNumber": "INV-8824",
  "supplierName": "Alpha Supplies",
  "amount": 459000,
  "department": "Finance"
}
Response:

json
Copy code
{
  "status": "ENQUEUED",
  "transactionId": "9bffb0af-..."
}
📊 Fraud Score Processing (Worker)
/worker/score will automatically:

compute a risk score

apply fraud rules

store decision

link to original transaction

🛢️ Database Schema (Prisma)
Transaction

Decision

Rule

Rules can be added at runtime to build new fraud logic.

🔒 Security Design
Audit logging

Rule transparency

Tamper-proof scoring records

🧭 Future Roadmap
ML risk scoring (gradient boosted trees)

Supplier behaviour fingerprinting

Procurement anomaly models

Graph-based collusion detection

👤 Author
Built by Aquila Muriuki
Cloud-native fraud prevention ⚡

