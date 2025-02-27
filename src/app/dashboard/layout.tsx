"use client";

import React from "react";
import { Sidebar, SidebarContent, SidebarItem, SidebarTrigger } from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  UserCog,
  Settings,
  LogOut,
  Sprout,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <LayoutDashboard className="text-neutral-600 dark:text-neutral-300 group-hover:text-primary dark:group-hover:text-primary h-5 w-5 flex-shrink-0 transition-colors duration-200" />
      ),
    },
    {
      label: "Profile",
      href: "/dashboard/profile",
      icon: (
        <UserCog className="text-neutral-600 dark:text-neutral-300 group-hover:text-primary dark:group-hover:text-primary h-5 w-5 flex-shrink-0 transition-colors duration-200" />
      ),
    },
    {
      label: "Settings",
      href: "/dashboard/settings",
      icon: (
        <Settings className="text-neutral-600 dark:text-neutral-300 group-hover:text-primary dark:group-hover:text-primary h-5 w-5 flex-shrink-0 transition-colors duration-200" />
      ),
    },
    {
      label: "Logout",
      href: "/logout",
      icon: (
        <LogOut className="text-neutral-600 dark:text-neutral-300 group-hover:text-primary dark:group-hover:text-primary h-5 w-5 flex-shrink-0 transition-colors duration-200" />
      ),
    },
  ];


  return (
    <div
      className={cn(
        "rounded-lg flex flex-col md:flex-row bg-gray-50 dark:bg-neutral-900 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-800 overflow-hidden",
        "h-screen"
      )}
    >
      <Sidebar>
        <div className="flex items-center justify-between p-4">
          <LogoIcon />
          <SidebarTrigger className="md:hidden" />
        </div>
        <SidebarContent className="justify-between gap-10 bg-white dark:bg-neutral-950 border-r border-neutral-200 dark:border-neutral-800 shadow-lg">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <div className="mt-6 flex flex-col gap-2 px-3">
              {links.map((link, idx) => (
                <SidebarItem
                  key={idx}
                  href={link.href}
                  icon={link.icon}
                  className={cn(
                    "py-2.5 px-4 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-lg transition-all duration-200 group",
                    pathname === link.href &&
                      "bg-neutral-100 dark:bg-neutral-900 font-medium"
                  )}
                >
                  {link.label}
                </SidebarItem>
              ))}
            </div>
          </div>
        </SidebarContent>
      </Sidebar>
      <div className="flex flex-1">
        <div className="p-4 md:p-8 rounded-tl-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 flex flex-col gap-4 flex-1 w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
}

const LogoIcon = () => {
  return (
    <Link
      href="/dashboard"
      className="font-medium flex items-center gap-2 text-sm py-2 px-1 relative z-20 hover:opacity-80 transition-opacity"
    >
      <Sprout className="h-6 w-6 text-primary" />
      <span className="text-foreground">Sprout</span>
    </Link>
  );
};
