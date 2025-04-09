// components/ui/Sidebar.tsx
import React from "react";
import Link from "next/link";
import { Home, MessageSquare, Settings, History } from "lucide-react";

export default function Sidebar() {
  return (
    <nav className="h-full flex flex-col p-4 space-y-4 bg-[#141414]">
      <Link href="/">
        <a className="flex items-center space-x-2 hover:text-[#1E90FF] transition-colors">
          <Home className="w-5 h-5" />
          <span>Dashboard</span>
        </a>
      </Link>
      <Link href="/Chat">
        <a className="flex items-center space-x-2 hover:text-[#1E90FF] transition-colors">
          <MessageSquare className="w-5 h-5" />
          <span>Chat IA</span>
        </a>
      </Link>
      <Link href="/history">
        <a className="flex items-center space-x-2 hover:text-[#1E90FF] transition-colors">
          <History className="w-5 h-5" />
          <span>Histórico</span>
        </a>
      </Link>
      <Link href="/settings">
        <a className="flex items-center space-x-2 hover:text-[#1E90FF] transition-colors">
          <Settings className="w-5 h-5" />
          <span>Configurações</span>
        </a>
      </Link>
    </nav>
  );
}
