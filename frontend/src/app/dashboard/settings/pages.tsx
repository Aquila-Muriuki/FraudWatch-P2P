// app/dashboard/settings/page.tsx
"use client";

import { useState } from 'react';
import { Settings, Users, Plug, Activity, Shield } from "lucide-react";
// Assuming you have components like Card, Button, Tabs, etc.
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; 

// --- Settings Menu Data ---
const settingsMenuItems = [
  { id: "general", label: "General", icon: Settings, component: GeneralSettings },
  { id: "users", label: "Users & Roles", icon: Users, component: UserSettings },
  { id: "integrations", label: "Integrations", icon: Plug, component: IntegrationsSettings },
  { id: "audit", label: "Audit & Logs", icon: Activity, component: AuditSettings },
  { id: "security", label: "Security", icon: Shield, component: SecuritySettings },
];

export default function SettingsPage() {
  // State to track which settings panel is currently active
  const [activeTab, setActiveTab] = useState(settingsMenuItems[0].id);
  
  // Find the component corresponding to the active tab
  const ActiveComponent = settingsMenuItems.find(item => item.id === activeTab)?.component || GeneralSettings;

  return (
    <div className="p-8 space-y-8">
      
      {/* 1. Header */}
      <header className="flex items-center gap-4 border-b pb-4">
        <Settings className="h-8 w-8 text-muted-foreground" />
        <h1 className="text-3xl font-bold tracking-tight">System Settings</h1>
      </header>

      {/* 2. Two-Column Layout (Settings Menu + Content) */}
      <div className="flex gap-8">
        
        {/* Left Column: Settings Navigation Menu */}
        <nav className="w-64 flex-shrink-0">
          <ul className="space-y-1">
            {settingsMenuItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.id === activeTab;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`group flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150 
                      ${isActive 
                        ? 'bg-secondary text-secondary-foreground shadow-sm' 
                        : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'
                      }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Column: Settings Content */}
        <div className="flex-1 min-w-0">
          <ActiveComponent />
        </div>
      </div>
    </div>
  );
}

// --- Component Definitions (Placeholders) ---

function GeneralSettings() {
  return (
    <div className="h-96 rounded-lg border border-dashed bg-card p-6">
        <h2 className="text-xl font-semibold mb-4">General Application Settings</h2>
        <p className="text-muted-foreground">Configure application name, time zone, and default behaviors.</p>
        <p className="text-muted-foreground text-center pt-8">
            Form for General Settings goes here.
        </p>
    </div>
  );
}

function UserSettings() {
  return (
    <div className="h-96 rounded-lg border border-dashed bg-card p-6">
        <h2 className="text-xl font-semibold mb-4">Users & Roles Management</h2>
        <p className="text-muted-foreground">Manage user accounts, assign roles (e.g., Admin, Analyst), and set permissions.</p>
        <p className="text-muted-foreground text-center pt-8">
            User table and role editor components go here.
        </p>
    </div>
  );
}

function IntegrationsSettings() {
  return (
    <div className="h-96 rounded-lg border border-dashed bg-card p-6">
        <h2 className="text-xl font-semibold mb-4">Integrations & APIs</h2>
        <p className="text-muted-foreground">Connect external services like email, Slack, and external data sources.</p>
        <p className="text-muted-foreground text-center pt-8">
            Forms for API keys and webhook URLs go here.
        </p>
    </div>
  );
}

function AuditSettings() {
  return (
    <div className="h-96 rounded-lg border border-dashed bg-card p-6">
        <h2 className="text-xl font-semibold mb-4">Audit Trail and System Logs</h2>
        <p className="text-muted-foreground">View system activity logs and configuration change history.</p>
        <p className="text-muted-foreground text-center pt-8">
            Log viewer component goes here.
        </p>
    </div>
  );
}

function SecuritySettings() {
  return (
    <div className="h-96 rounded-lg border border-dashed bg-card p-6">
        <h2 className="text-xl font-semibold mb-4">Security Configuration</h2>
        <p className="text-muted-foreground">Configure multi-factor authentication (MFA), password policies, and IP whitelisting.</p>
        <p className="text-muted-foreground text-center pt-8">
            Security forms go here.
        </p>
    </div>
  );
}