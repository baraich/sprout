import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users } from "lucide-react";
import Link from "next/link";
import millify from "millify";
import { getGroups } from "@/lib/community.db";

export default async function CommunityBrowsePage() {
  const groups = await getGroups();
  return (
    <div className="container mx-auto py-24 px-4 md:px-8 lg:px-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Groups</h1>
        <p className="text-muted-foreground">
          Join a community that understands and supports your journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group, index) => (
          <Link key={index} href="/community">
            <Card className="hover:shadow-lg transition-shadow duration-300 min-h-56 cursor-pointer hover:border-foreground/30 border-border/50 bg-gradient-to-b from-card/90 to-card/40">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{group.name}</span>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/60 px-2 py-1 rounded border border-border/40">
                    <Users className="h-4 w-4" />
                    <span>{millify(group.usersJoined)}</span>
                  </div>
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {group.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {group.tags.split(",").map((topic, idx) => (
                    <span
                      key={idx}
                      className="bg-secondary/40 text-secondary-foreground px-2 py-1 text-sm rounded border border-secondary/30"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
