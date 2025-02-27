"use client";
import { Hero } from "@/components/blocks/hero";
import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee";
import { AnimatedGridPattern } from "@/components/ui/grid-pattern-background";
import { ArrowRight, Sprout } from "lucide-react";
import { Feature } from "@/components/ui/feature-section-with-bento-grid";

export default function LandingPage() {
  return (
    <main>
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
              href: "/dashboard",
              text: "Start Your Journey",
              icon: (
                <Sprout
                  size={16}
                  className="group-hover:scale-110 transition-transform"
                />
              ),
            },
            secondaryAction: {
              href: "/community",
              text: "Join Community",
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
              avatar:
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop",
            },
            text: "Sprout gave me the structure and support I needed to finally break free from my social media addiction. The progress tracking and community support made all the difference.",
          },
          {
            author: {
              name: "James L.",
              handle: "1 Year Milestone",
              avatar:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
            },
            text: "The daily check-ins and milestone celebrations kept me motivated. I've been gaming-free for a year now, and I've never felt more present and connected with my family.",
          },
          {
            author: {
              name: "Emily R.",
              handle: "3 Months Progress",
              avatar:
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop",
            },
            text: "The resources and community here helped me understand my triggers and develop healthy coping mechanisms. I'm finally taking control of my life again.",
          },
        ]}
        className="border-y marquee-enabled"
      />

      <section className="py-24 px-4 md:px-8 lg:px-12">
        <Feature />
      </section>
    </main>
  );
}
