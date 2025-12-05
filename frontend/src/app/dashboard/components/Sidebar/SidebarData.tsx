import {
  Compass,
  Brain,
  Receipt,
  AlarmCheck,
  Factory,
  FileText,
  Bot,
  ChartPie,
  Settings,
  Activity,
  ShieldCheck,
} from "lucide-react";

export const sidebarItems = [
  {
    label: "Overview",
    icon: Compass,
    path: "/dashboard",
  },
  {
    label: "Risk Engine",
    icon: Brain,
    path: "/dashboard/risk",
  },
  {
    label: "Transactions",
    icon: Receipt,
    path: "/dashboard/transactions",
  },
  {
    label: "Alerts & Cases",
    icon: AlarmCheck,
    path: "/dashboard/alerts",
  },
  {
    label: "Vendor Intelligence",
    icon: Factory,
    path: "/dashboard/vendors",
  },
  {
    label: "Compliance",
    icon: ShieldCheck,
    path: "/dashboard/compliance",
  },
  {
    label: "AI Insights",
    icon: Bot,
    path: "/dashboard/insights",
  },
  {
    label: "Reports",
    icon: FileText,
    path: "/dashboard/reports",
  },
];

export const utilityItems = [
  {
    label: "System Health",
    icon: Activity,
    path: "/dashboard/system",
  },
  {
    label: "Settings",
    icon: Settings,
    path: "/dashboard/settings",
  },
];
