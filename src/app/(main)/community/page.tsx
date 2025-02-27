"use client";

import { Hero } from "@/components/blocks/hero";
import { AnimatedGridPattern } from "@/components/ui/grid-pattern-background";
import { Users, MessageCircle, Heart, Share2 } from "lucide-react";

export default function CommunityPage() {
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
            text: "Join Our Community",
            variant: "outline",
            size: "md",
            className:
              "self-start border border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent backdrop-blur-sm transition-all hover:border-primary/30 hover:from-primary/20 hover:via-primary/10 hover:to-transparent rounded-full shadow-sm",
            icon: <Users size={16} className="text-primary" />,
          }}
          content={{
            title: "Connect & Grow Together",
            description:
              "Join a supportive community of individuals on their recovery journey. Share experiences, find encouragement, and build meaningful connections in a safe, judgment-free space.",
            primaryAction: {
              href: "/community/browse",
              text: "Join Community",
              icon: (
                <Users
                  size={16}
                  className="group-hover:scale-110 transition-transform"
                />
              ),
            },
            secondaryAction: {
              href: "/community/browse",
              text: "Browse Groups",
              icon: (
                <MessageCircle
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              ),
            },
          }}
        />
      </div>

      <section className="py-24 px-4 md:px-8 lg:px-12 border-t">
        <div className="container mx-auto">
          <div className="flex flex-col gap-10">
            <div className="flex gap-4 flex-col items-start">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                Community Features
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                Everything you need to connect, share, and grow with others on
                similar journeys.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-muted/80 rounded-lg p-6 flex flex-col gap-4">
                <MessageCircle className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold">Support Groups</h3>
                <p className="text-muted-foreground">
                  Join topic-specific groups for focused discussions and
                  support.
                </p>
              </div>

              <div className="bg-muted/80 rounded-lg p-6 flex flex-col gap-4">
                <Heart className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold">Success Stories</h3>
                <p className="text-muted-foreground">
                  Share and celebrate recovery milestones with the community.
                </p>
              </div>

              <div className="bg-muted/80 rounded-lg p-6 flex flex-col gap-4">
                <Share2 className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold">Resource Sharing</h3>
                <p className="text-muted-foreground">
                  Access and share helpful resources, tips, and strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
