"use client";

import ThemeToggle from "@/components/ui/theme-toggle";
import Link from "next/link";
import { Sprout } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between py-6 px-4 md:px-8 lg:px-12">
        <Link href="/" className="cursor-pointer">
          <span className="font-bold text-xl flex items-center gap-2">
            <Sprout size={20} className="text-primary" />
            Sprout
          </span>
        </Link>
        <ThemeToggle />
      </header>
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        {children}
      </main>
    </div>
  );
}
