'use client';

import { SidebarProvider } from "@/components/ui/sidebar"; 

export default function SideBarProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      {children}
    </SidebarProvider>
  );
}
