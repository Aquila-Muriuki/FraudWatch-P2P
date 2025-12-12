// app/dashboard/insights/page.tsx

import { Bot, LineChart } from "lucide-react";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; 

export default function AIInsightsPage() {
  return (
    <div className="p-8 space-y-6">
      <header className="flex items-center gap-4">
        <Bot className="h-8 w-8 text-teal-600" />
        <h1 className="text-3xl font-bold tracking-tight">AI Insights & Pattern Detection</h1>
      </header>

      <p className="text-muted-foreground">
        Visualize emerging fraud trends, model performance, and feature importance driving risk scores.
      </p>

      {/* Metrics Cards (e.g., Model Accuracy, False Positives) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Model Confidence</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.5%</div>
          </CardContent>
        </Card> */}
      </div>

      {/* Visualization Area */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="h-[400px] rounded-lg border border-dashed bg-card p-6">
           <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><LineChart className="h-5 w-5" /> Emerging Anomaly Clusters</h2>
           <p className="text-muted-foreground text-center pt-10">
               Chart component for viewing clustering algorithms (e.g., t-SNE, UMAP).
           </p>
        </div>
        <div className="h-[400px] rounded-lg border border-dashed bg-card p-6">
           <h2 className="text-xl font-semibold mb-4">Feature Importance</h2>
           <p className="text-muted-foreground text-center pt-10">
               Bar chart showing which transaction fields most influence the AI risk score.
           </p>
        </div>
      </div>
    </div>
  );
}