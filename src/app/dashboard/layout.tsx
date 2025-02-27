"use client";

import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
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
        <LayoutDashboard className="text-neutral-600 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white h-5 w-5 flex-shrink-0 transition-colors" />
      ),
    },
    {
      label: "Profile",
      href: "/dashboard/profile",
      icon: (
        <UserCog className="text-neutral-600 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white h-5 w-5 flex-shrink-0 transition-colors" />
      ),
    },
    {
      label: "Settings",
      href: "/dashboard/settings",
      icon: (
        <Settings className="text-neutral-600 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white h-5 w-5 flex-shrink-0 transition-colors" />
      ),
    },
    {
      label: "Logout",
      href: "/logout",
      icon: (
        <LogOut className="text-neutral-600 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white h-5 w-5 flex-shrink-0 transition-colors" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-50 dark:bg-neutral-900 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-800 overflow-hidden",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 bg-white dark:bg-neutral-950 border-r border-neutral-200 dark:border-neutral-800 shadow-lg min-w-[80px] w-[180px] transition-all duration-75 ease-linear">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <div className="flex justify-center py-4">
              {open ? <LogoIcon /> : <LogoIcon />}
            </div>
            <div className="mt-8 flex flex-col gap-1.5">
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={link}
                  className={cn(
                    "py-3 px-4 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-lg transition-colors",
                    pathname === link.href &&
                      "bg-neutral-100 dark:bg-neutral-900"
                  )}
                />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="flex flex-1">
        <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 flex flex-col gap-2 flex-1 w-full h-full">
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
      className="font-normal flex items-center text-sm py-2 px-1 relative z-20"
    >
      <Sprout className="h-6 w-6 text-emerald-600" />
    </Link>
  );
};
