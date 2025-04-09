// components/layout.tsx
import React, { ReactNode } from "react";
import Sidebar from "@/components/ui/Sidebar"; // Corrigido: 'Sidebar' com "S" maiúsculo
import { Toaster } from "@/components/ui/toaster";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex bg-[#0e1015] text-white">
      {/* Sidebar lateral */}
      <aside className="w-64 border-r border-[#1E90FF]/20">
        <Sidebar />
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-4">{children}</main>

      {/* Notificações */}
      <Toaster />
    </div>
  );
}
