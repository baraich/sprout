"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { createContext, useContext, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

interface SidebarContextType {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  open: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within SidebarProvider");
  }
  return context;
};

interface SidebarProviderProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const SidebarProvider = ({
  children,
  defaultOpen = false,
}: SidebarProviderProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  // Close sidebar on route change for mobile
  useEffect(() => {
    const handleRouteChange = () => {
      if (window.innerWidth < 768) {
        close();
      }
    };

    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  return (
    <SidebarContext.Provider value={{ isOpen, toggle, close, open }}>
      {children}
    </SidebarContext.Provider>
  );
};

interface SidebarProps {
  children: React.ReactNode;
  className?: string;
}

export const Sidebar = ({ children, className }: SidebarProps) => {
  return (
    <SidebarProvider>
      <nav
        className={cn(
          "relative flex h-screen flex-col bg-white shadow-sm dark:bg-neutral-950",
          className
        )}
        aria-label="Sidebar Navigation"
      >
        {children}
      </nav>
    </SidebarProvider>
  );
};

interface SidebarTriggerProps {
  className?: string;
}

export const SidebarTrigger = ({ className }: SidebarTriggerProps) => {
  const { isOpen, toggle } = useSidebar();

  return (
    <button
      onClick={toggle}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 dark:hover:bg-neutral-800 dark:focus:ring-neutral-500",
        className
      )}
      aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      aria-expanded={isOpen}
      aria-controls="sidebar-content"
    >
      {isOpen ? (
        <X className="h-6 w-6" aria-hidden="true" />
      ) : (
        <Menu className="h-6 w-6" aria-hidden="true" />
      )}
    </button>
  );
};

interface SidebarContentProps {
  children: React.ReactNode;
  className?: string;
}

export const SidebarContent = ({
  children,
  className,
}: SidebarContentProps) => {
  const { isOpen, close } = useSidebar();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        id="sidebar-content"
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 transform overflow-y-auto bg-white px-4 py-6 transition-all dark:bg-neutral-950 md:relative md:translate-x-0",
          className
        )}
        initial={{ x: "-100%", opacity: 0 }}
        animate={{
          x: isOpen ? 0 : "-100%",
          opacity: isOpen ? 1 : 0,
        }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{ type: "spring", bounce: 0, duration: 0.3 }}
      >
        {children}
      </motion.div>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => close()}
        />
      )}
    </AnimatePresence>
  );
};

interface SidebarItemProps {
  href: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const SidebarItem = ({
  href,
  icon,
  children,
  className,
}: SidebarItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        className
      )}
    >
      {icon && (
        <span className="flex h-6 w-6 items-center justify-center">{icon}</span>
      )}
      <span>{children}</span>
    </Link>
  );
};
