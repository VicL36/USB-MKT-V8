// components/layout.tsx
import React, { useState, useEffect, useCallback } from 'react';
import Sidebar from '@/components/ui/Sidebar';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Read initial sidebar collapsed state from localStorage (or default to true)
  const getInitialSidebarState = () => {
    if (typeof window !== 'undefined') {
      const storedState = localStorage.getItem('sidebarCollapsed');
      return storedState ? JSON.parse(storedState) : true;
    }
    return true;
  };

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsSidebarCollapsed(getInitialSidebarState());
    setIsMounted(true);
  }, []);

  // Save sidebar state in localStorage after component mounts
  useEffect(() => {
    if (isMounted && typeof window !== 'undefined') {
      localStorage.setItem('sidebarCollapsed', JSON.stringify(isSidebarCollapsed));
    }
  }, [isSidebarCollapsed, isMounted]);

  // Callback to toggle the sidebar state
  const toggleSidebar = useCallback(() => {
    setIsSidebarCollapsed(prevState => !prevState);
  }, []);

  // Calculate left padding for the main content area based on sidebar state
  const mainPaddingClass = isMounted ? (isSidebarCollapsed ? "pl-16" : "pl-60") : "pl-16";

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Render the Sidebar only after mounting to avoid SSR issues */}
      {isMounted && <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />}
      
      {/* Main content area */}
      <main className={cn(
        "flex-1 pt-4 pb-8", 
        mainPaddingClass, 
        "transition-[padding-left] duration-300 ease-in-out"
      )}>
        <div className="px-4 md:px-6">
          {children}
        </div>
      </main>

      {/* Toaster for notifications */}
      <Toaster />
    </div>
  );
};

export default Layout;
