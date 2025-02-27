import { Footerdemo } from "@/components/ui/footer-section";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Sprout } from "lucide-react";

const ThemeToggle = dynamic(
  async () => await import("@/components/ui/theme-toggle")
);

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <nav className="flex items-center justify-between py-8 px-4 md:px-8 lg:px-12 border-b">
        <div className="flex items-center gap-8">
          <Link href={"/"} className="cursor-help">
            <span className="font-bold text-xl flex items-center gap-2">
              <Sprout size={20} className="text-primary" />
              Sprout
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link
              href={"/dashboard"}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href={"/community"}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Community
            </Link>
          </div>
        </div>

        <ThemeToggle />
      </nav>

      {children}

      <Footerdemo />
    </main>
  );
}
