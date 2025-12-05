FraudWatch P2P
AI-Driven Fraud Detection & Compliance for Public Finance Systems

FraudWatch P2P is an AI-powered risk intelligence layer that connects securely to IFMIS (Integrated Financial Management Information System) and performs real-time fraud detection, risk scoring, and compliance validation on procurement and payment transactions.

The system is non-intrusive — it operates as an external intelligence layer that reads transactional data from IFMIS, evaluates financial integrity, detects anomalies, and returns audit-ready outcomes back to finance teams, without modifying government systems.

🎯 What FraudWatch P2P Solves

Public sector finance systems face challenges such as:

Lack of real-time fraud analytics

Manual compliance checks

Weak linkage to procurement rules

Insider manipulation and duplicate payments

Limited transparency and traceability

Poor audit evidence trails

Reactive fraud detection (after payment)

FraudWatch solves this by providing:

Real-time fraud scoring

Automated compliance enforcement

Predictive risk analytics

Early detection of anomalies

Auditable decision trail

AI recommendations

Before a payment is approved — the system confirms:

Legality

Compliance

Risk level

Budget availability

Procurement integrity

🔐 Non-Intrusive Intelligence Layer Architecture
       IFMIS (Gov ERP System)
             |
     Secure API Connector
             |
     FraudWatch P2P Engine
  (Risk Scoring + Compliance AI)
             |
   Dashboard & Alerts Layer


📌 IFMIS remains the source of truth.
📌 FraudWatch does not alter IFMIS records.
📌 It only reads transactions, evaluates them, and outputs results.

🧠 AI Risk Scoring

Each payment request is analyzed using:

Pattern recognition (similarity models)

Duplicate invoice detection

Supplier fraud patterns

Network graph insights

Conflict of interest signals

Embedding-based anomaly detection

Threshold-based rule engine

Each transaction gets a Risk Score:

0 – 30 → Low Risk

31 – 60 → Warning

61 – 100 → High Risk (Flag)

📜 Compliance Validation Engine

The platform automatically checks against:

Legal Framework

Public Finance Management Act (PFM Act)

Public Procurement & Disposal Act (PPDA Regulations)

Policy Controls

Mandatory quotation rules

Delegated authority limits

Competition requirements

Framework contract rules

Budget Validation

Vote-book balance

Ceiling enforcement

Commitment control

Fund & program alignment

📌 Output is deterministic, meaning every violation is captured with a reason.

Example output:

{
  "status": "BLOCKED",
  "ruleViolation": "Amount exceeds delegation limit for ICT Procurement",
  "reference": "PFM Act, Section 149(2)"
}

📊 Real-Time Fraud Detection

The engine runs simultaneous checks:

Detection Type	Description
Duplicate Invoices	Hash & text similarity
Bid Rigging Patterns	Same suppliers rotating
Vendor Conflict Graph	Shared shareholders
Document Manipulation	OCR+AI detection
Split Procurement	Avoid threshold rules
Inflated Pricing	Market price check
Insider Collusion	History & links
Budget Manipulation	Reallocation patterns

AI helps reduce false positives through scoring and context.

🧱 Technology Stack (TypeScript / JavaScript)
Frontend

Next.js (React)

Tailwind CSS

shadcn/ui

TypeScript

Backend & Services

Hono (Node.js runtime)

TypeScript everywhere

PostgreSQL or PlanetScale

Prisma ORM

AI Microservices (JavaScript-first)

Rule Engine built in TypeScript

Risk Scoring Module (Node.js)

NLP AI Helper (optional Python interface)

📌 No heavy ML required initially — the system works with deterministic rules + statistical anomaly detection.

🔌 IFMIS Integration

The platform communicates with IFMIS using:

REST API (preferred)

SOAP (legacy)

Secure Gateway Layer

Scheduled Sync + Live Events

All calls use:

OAuth2

mTLS

Logging middleware

The integration layer handles:

Transaction import

Budget lookup

Supplier data mapping

Audit trace creation

🛠️ Setup and Installation
Clone Repository
git clone https://github.com/Aquila-Muriuki/FraudWatch-P2P.git
cd FraudWatch-P2P

Install Dependencies
pnpm install

Environment Variables

Create .env:

DATABASE_URL="postgres://..."
IFMIS_API_URL="..."
IFMIS_CLIENT_ID="..."
IFMIS_CLIENT_SECRET="..."
JWT_SECRET="example_secret"

Run Backend
cd apps/api
pnpm dev

Run Dashboard
cd apps/frontend
pnpm dev

🚨 Example: Risk Analysis API

Request:

POST /api/risk/score
{
  "invoiceNumber": "INV-00192",
  "supplier": "ABC Holdings Ltd",
  "amount": 421000,
  "department": "ICT"
}


Response:

{
  "score": 78,
  "riskLevel": "HIGH",
  "flags": [
    "Supplier conflict detected",
    "Historical bid rigging pattern",
    "Price exceeds market average"
  ]
}

🧭 Roadmap

Phase 1

IFMIS Connector

Rule Engine (PFM/PPDA)

Dashboard

Risk Scoring

Phase 2

Supplier Relationship Graph

OCR Document Scan

Anomaly Detection

Contract Analysis

Procurement Cycle Analytics

Phase 3

Graph ML

Fraud Pattern Database

Predictive Models

National Anti-Corruption Links

🔐 Security & Governance

Zero-trust architecture

Role-based access control (RBAC)

Audit event logging

Immutable record trails

TLS everywhere

Digital signature support

Maker-checker principle

No credentials stored in the codebase.
Use .env and a proper Vault in production.

📝 License

MIT License — free to use, modify, and deploy.

👥 Contributing

Pull requests are welcome.

Fork repo

Create feature branch

Commit changes

Open PR

🏁 Summary

FraudWatch P2P transforms public finance integrity by:

Embedding AI into existing financial systems

Detecting fraud before payments move

Enforcing compliance automatically

Keeping IFMIS clean and auditable

Providing transparency for finance teams

It is designed for:

Internal Audit Units

Procurement Teams

National Treasury Oversight

County Governments

Anti-Corruption Agencies

Donor-funded projects
