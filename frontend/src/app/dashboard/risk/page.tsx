// app/dashboard/risk/page.tsx

import { Brain } from "lucide-react";

export default function RiskEnginePage() {
  return (
    <div className="p-8">
      <header className="mb-6 flex items-center gap-3">
        <Brain className="h-7 w-7 text-purple" />
        <h1 className="text-3xl font-bold tracking-tight">Risk Engine Configuration</h1>
      </header>
      
      <p className="text-muted-foreground">
        Manage and deploy your automated fraud detection rules here.
      </p>

      {/* Placeholder for the main Risk Rules table/component */}
      <div className="mt-8 h-96 rounded-lg border border-dashed bg-[#071018]  p-6">
          {/* Your UI components (e.g., RulesTable, ThresholdSliders) will go here */}
          <p className="text-muted-foreground text-center pt-8">
            Component for Risk Rules Editor goes here.
          </p>
      </div>
    </div>
  );
}