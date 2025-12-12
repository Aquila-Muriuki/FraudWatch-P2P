// app/dashboard/reports/page.tsx

import { FileText, PlusCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";

export default function ReportsPage() {
  return (
    <div className="p-8 space-y-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <FileText className="h-8 w-8 text-yellow-600" />
          <h1 className="text-3xl font-bold tracking-tight">Custom Reports</h1>
        </div>
        {/* <Button variant="default" className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            Create New Report
        </Button> */}
      </header>

      <p className="text-muted-foreground">
        Generate customized reports on suspicious activity, financial exposure, and performance metrics.
      </p>

      {/* Saved Reports / Report Generation Form */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="h-[300px] rounded-lg border border-dashed bg-card p-6 lg:col-span-2">
           <h2 className="text-xl font-semibold mb-4">Report Generation Tool</h2>
           <p className="text-muted-foreground">Form component for selecting date ranges, metrics, and filters.</p>
        </div>
        <div className="h-[300px] rounded-lg border border-dashed bg-card p-6">
           <h2 className="text-xl font-semibold mb-4">Recently Generated Reports</h2>
           <p className="text-muted-foreground text-center pt-8">
               List of downloadable PDF/CSV files.
           </p>
        </div>
      </div>
    </div>
  );
}