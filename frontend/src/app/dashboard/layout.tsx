import { ThemeProvider } from "next-themes";
import ClientShell from "./components/Clientshell";

// 🚀 layout remains a server component, no useState here
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      {/* Server-rendered layout */}
      <ClientShell>{children}</ClientShell>
    </ThemeProvider>
  );
}
