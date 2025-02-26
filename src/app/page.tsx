"use client";
import { Hero } from "@/components/blocks/hero";
import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee";
import { AnimatedGridPattern } from "@/components/ui/grid-pattern-background";
import { Toggle } from "@/components/ui/toggle";
import { ArrowRight, Moon, Sun, Sprout } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function LandingPage() {
  const { theme, setTheme } = useTheme();

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
              href={"/progress"}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Progress
            </Link>
            <Link
              href={"/resources"}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Resources
            </Link>
            <Link
              href={"/community"}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Community
            </Link>
          </div>
        </div>

        <div>
          <Toggle
            variant="outline"
            onPressedChange={() =>
              setTheme(theme === "light" ? "dark" : "light")
            }
            pressed={theme === "dark"}
            className="group size-9 rounded-none transition-none data-[state=on]:bg-transparent"
          >
            {theme === "dark" ? (
              <>
                <Sun
                  size={16}
                  strokeWidth={2}
                  className="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
                  aria-hidden="true"
                />
                <Moon
                  size={16}
                  strokeWidth={2}
                  className="shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
                  aria-hidden="true"
                />
              </>
            ) : (
              <>
                <Moon
                  size={16}
                  strokeWidth={2}
                  className="shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
                  aria-hidden="true"
                />
                <Sun
                  size={16}
                  strokeWidth={2}
                  className="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
                  aria-hidden="true"
                />
              </>
            )}
          </Toggle>
        </div>
      </nav>

      <div className="relative">
        <AnimatedGridPattern
          className="absolute inset-0 -z-10 opacity-50 dark:opacity-20"
          width={32}
          height={32}
          strokeDasharray={2}
          numSquares={35}
          maxOpacity={0.3}
          duration={3}
        />
        <Hero
          pill={{
            text: "Take Control of Your Life",
            variant: "outline",
            size: "md",
            className:
              "self-start border border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent backdrop-blur-sm transition-all hover:border-primary/30 hover:from-primary/20 hover:via-primary/10 hover:to-transparent rounded-full shadow-sm",
            icon: <Sprout size={16} className="text-primary" />,
          }}
          content={{
            title: "Break From Addictions.",
            description:
              "Your personal companion in the journey to break free from addictions. Track your progress, celebrate milestones, and build lasting positive habits with our powerful, judgment-free platform.",
            primaryAction: {
              href: "/signup",
              text: "Start Your Journey",
              icon: (
                <Sprout
                  size={16}
                  className="group-hover:scale-110 transition-transform"
                />
              ),
            },
            secondaryAction: {
              href: "/about",
              text: "Learn More",
              icon: (
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              ),
            },
          }}
        />
      </div>

      <TestimonialsSection
        title="Real Stories, Real Transformations"
        description="Witness the life-changing journeys of those who found strength, support, and success with Sprout. Your transformation story begins here."
        testimonials={[
          {
            author: {
              name: "Sarah M.",
              handle: "6 Months Clean",
              avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop",
            },
            text: "Sprout gave me the structure and support I needed to finally break free from my social media addiction. The progress tracking and community support made all the difference.",
          },
          {
            author: {
              name: "James L.",
              handle: "1 Year Milestone",
              avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
            },
            text: "The daily check-ins and milestone celebrations kept me motivated. I've been gaming-free for a year now, and I've never felt more present and connected with my family.",
          },
          {
            author: {
              name: "Emily R.",
              handle: "3 Months Progress",
              avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop",
            },
            text: "The resources and community here helped me understand my triggers and develop healthy coping mechanisms. I'm finally taking control of my life again.",
          },
        ]}
        className="border-y marquee-enabled"
      />
    </main>
  );
}
