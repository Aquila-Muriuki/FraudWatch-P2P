INSERT INTO rules (id, code, description, severity, ruleType, payload, active)
VALUES
('r-deleg-1','DELEG_LIMIT','Amount exceeds delegation limit for department',50,'threshold','{\"field\":\"amount\",\"limitByDept\":{\"ICT\":200000, \"FINANCE\":1000000}, \"legalRef\":\"PFM Act Section 149(2)\"}',1),
('r-quote-1','MISSING_QUOTE','Quotation missing above threshold',20,'custom','{\"threshold\":100000, \"legalRef\":\"PPDA Reg 34\"}',1);
