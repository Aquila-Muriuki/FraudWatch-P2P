// app/dashboard/alerts/page.tsx

import { AlarmCheck, FileSearch } from "lucide-react";
// Assuming you have a Card component from a library like Shadcn UI
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; 
// import { Button } from "@/components/ui/button"; 
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"; 

export default function AlertsAndCasesPage() {
  return (
    <div className="p-8 space-y-8">
      
      {/* 1. Header and Action */}
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <AlarmCheck className="h-8 w-8 text-red-600" />
          <h1 className="text-3xl font-bold tracking-tight">Alerts & Cases Management</h1>
        </div>
        {/* <Button variant="secondary" className="flex items-center gap-2">
          <FileSearch className="h-4 w-4" />
          New Manual Case
        </Button> */}
      </header>

      {/* 2. Key Metrics Summary (Mocked Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Alerts</CardTitle>
            <AlarmCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14</div>
            <p className="text-xs text-muted-foreground">+3 since last week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cases in Review</CardTitle>
            <FileSearch className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">High Priority</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Cases Closed</CardTitle>
            <ShieldCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">452</div>
            <p className="text-xs text-muted-foreground">37 Closed this Month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Time to Close</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2 Days</div>
            <p className="text-xs text-muted-foreground">Target: 1.0 Day</p>
          </CardContent>
        </Card> */}
      </div>

      {/* 3. Tabs for Alerts vs. Cases */}
      {/* <Tabs defaultValue="alerts" className="w-full">
        <TabsList>
          <TabsTrigger value="alerts">Current Alerts (14)</TabsTrigger>
          <TabsTrigger value="cases">Open Cases (5)</TabsTrigger>
          <TabsTrigger value="closed">Closed Cases</TabsTrigger>
        </TabsList>
        <TabsContent value="alerts" className="pt-4">
          <h2 className="text-lg font-semibold mb-3">Alert Queue</h2>
          <div className="h-96 rounded-lg border border-dashed bg-card p-6">
             <p className="text-muted-foreground text-center pt-8">
                Table component showing raw alerts triggered by the Risk Engine.
             </p>
          </div>
        </TabsContent>
        <TabsContent value="cases" className="pt-4">
          <h2 className="text-lg font-semibold mb-3">Investigation Workflow</h2>
          <div className="h-96 rounded-lg border border-dashed bg-card p-6">
             <p className="text-muted-foreground text-center pt-8">
                Table component showing alerts that have been converted to formal cases with assigned analysts.
             </p>
          </div>
        </TabsContent>
      </Tabs> */}

      {/* Placeholder for the main view content */}
      <div className="mt-8 h-[600px] rounded-lg border bg-[#071018]  p-6">
         <p className="text-muted-foreground text-center pt-24">
             Your operational tables and filters for managing alerts will be rendered here.
         </p>
      </div>

    </div>
  );
}