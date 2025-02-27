import {
  ChartArea as ChartLineUp,
  Users,
  BookOpen,
  Target,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { useTheme } from "next-themes";

function Feature() {
  const { theme } = useTheme();

  return (
    <div className="w-full py-20">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>Recovery Platform</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                Your Path to Recovery
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                Discover powerful tools and support to help you break free from
                addictions and build a healthier life.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-muted/80 rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col relative overflow-hidden">
              <FlickeringGrid
                className="absolute inset-0 opacity-10"
                color={theme === "dark" ? "#ffffff" : "#000000"}
              />
              <ChartLineUp className="w-8 h-8 stroke-1 relative z-10" />
              <div className="flex flex-col relative z-10">
                <h3 className="text-xl tracking-tight">
                  Personalized Progress Tracking
                </h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Monitor your recovery journey with customized tracking tools,
                  milestone celebrations, and detailed progress insights.
                </p>
              </div>
            </div>
            <div className="bg-muted/80 rounded-md aspect-square p-6 flex justify-between flex-col relative overflow-hidden">
              <FlickeringGrid
                className="absolute inset-0 opacity-10"
                color={theme === "dark" ? "#ffffff" : "#000000"}
              />
              <Users className="w-8 h-8 stroke-1 relative z-10" />
              <div className="flex flex-col relative z-10">
                <h3 className="text-xl tracking-tight">
                  24/7 Community Support
                </h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Connect with a supportive community of peers who understand
                  your journey and share experiences in a safe space.
                </p>
              </div>
            </div>

            <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col relative overflow-hidden">
              <FlickeringGrid
                className="absolute inset-0 opacity-10"
                color={theme === "dark" ? "#ffffff" : "#000000"}
              />
              <BookOpen className="w-8 h-8 stroke-1 relative z-10" />
              <div className="flex flex-col relative z-10">
                <h3 className="text-xl tracking-tight">Expert Resources</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Access a comprehensive library of evidence-based recovery
                  strategies, coping tools, and educational materials.
                </p>
              </div>
            </div>
            <div className="bg-muted/80 rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col relative overflow-hidden">
              <FlickeringGrid
                className="absolute inset-0 opacity-10"
                color={theme === "dark" ? "#ffffff" : "#000000"}
              />
              <Target className="w-8 h-8 stroke-1 relative z-10" />
              <div className="flex flex-col relative z-10">
                <h3 className="text-xl tracking-tight">Accountability Tools</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Stay on track with daily check-ins, goal setting features, and
                  personalized reminders to support your recovery journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
