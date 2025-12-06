"use client";

import ClientShell from "./components/ClientShell";
import RiskOverview from "./components/RiskOverview";
import CompliancePanel from "./components/CompliancePanel";
import AlertsFeed from "./components/AlertsFeed";

export default function DashboardPage() {
  return (
    <ClientShell>
      <div className="flex flex-col xl:flex-row gap-6 p-6 max-w-screen-2xl mx-auto w-full">
        
        {/* Main Column */}
        <div className="flex flex-col gap-6 flex-1 min-w-0">
          <RiskOverview />
          <CompliancePanel />
        </div>

        {/* Sidebar Column */}
        <div className="flex flex-col gap-6 w-full xl:w-1/3 min-w-0">
          <AlertsFeed />
        </div>

      </div>
    </ClientShell>
  );
}
