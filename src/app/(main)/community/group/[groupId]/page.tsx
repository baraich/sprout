"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Group, Topic } from "@/db/schema/community";
import { MessageCircle, Users, Clock, User } from "lucide-react";
import millify from "millify";

// eslint-disable-next-line
// @ts-ignore
import hrt from "human-readable-time";
import { useEffect, useState } from "react";

function SkeletonCard() {
  return (
    <Card className="border border-border/70 bg-gradient-to-b from-card to-card/60 backdrop-blur-sm hover:shadow-md hover:border-border transition-all duration-300 cursor-pointer rounded">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="h-5 bg-muted w-1/2 rounded"></span>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MessageCircle className="h-4 w-4" />
            <span className="h-4 bg-muted w-4 rounded"></span>
          </div>
        </CardTitle>
        <CardDescription className="h-4 bg-muted w-full rounded mt-2"></CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="h-3 w-3" />
            <span className="h-4 bg-muted w-1/4 rounded"></span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-3 w-3" />
            <span className="h-4 bg-muted w-1/4 rounded"></span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function SkeletonGroupHeader() {
  return (
    <div className="mb-12 relative overflow-hidden rounded border border-border/70 p-6 bg-gradient-to-b from-card to-card/50 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <div className="h-10 bg-muted w-1/3 rounded"></div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-5 w-5" />
            <div className="h-5 bg-muted w-16 rounded"></div>
          </div>
          <div className="h-10 bg-primary/50 w-24 rounded"></div>
        </div>
      </div>
      <div className="h-6 bg-muted w-3/4 rounded mb-6"></div>
      <div className="flex flex-wrap gap-2">
        {[1, 2, 3].map((tag) => (
          <div key={tag} className="h-6 bg-secondary/60 w-20 rounded"></div>
        ))}
      </div>
    </div>
  );
}

export default function GroupPage({
  params,
}: {
  params: Promise<{
    groupId: string;
  }>;
}) {
  const [group, setGroup] = useState<Group>();
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const groupId = (await params).groupId;

      try {
        const [groupResponse, topicsResponse] = await Promise.all([
          fetch(`/api/group?groupId=${groupId}`).then((res) => res.json()),
          fetch(`/api/topics?groupId=${groupId}`).then((res) => res.json()),
        ]);

        setGroup(groupResponse);
        setTopics(topicsResponse);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || !group) {
    return (
      <div className="container mx-auto py-16 px-4 md:px-8 lg:px-12">
        <SkeletonGroupHeader />
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="h-8 bg-muted w-24 rounded-md"></div>
            <div className="h-8 bg-primary/40 w-28 rounded-md"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((topic) => (
              <SkeletonCard key={topic} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 px-4 md:px-8 lg:px-12">
      {/* Group Header */}
      <div className="mb-12 relative overflow-hidden rounded border border-border/70 p-6 bg-gradient-to-b from-card to-card/50 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
          <h1 className="text-4xl font-bold mb-2 md:mb-0 text-foreground">
            {group.name}
          </h1>
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-foreground/90 font-medium bg-background/80 px-3 py-1 rounded border border-border/70">
              <Users className="h-4 w-4 text-primary" />
              <span>{millify(group.usersJoined)} members</span>
            </div>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors shadow-sm hover:shadow font-medium">
              Join Group
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2 text-foreground/90 font-medium md:hidden mb-4 bg-background/80 px-3 py-1 rounded border border-border/70 w-fit">
          <Users className="h-4 w-4 text-primary" />
          <span>{millify(group.usersJoined)} members</span>
        </div>
        <p className="text-foreground/90 text-lg mb-6 max-w-3xl font-medium">
          {group.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
          {group.tags.split(",").map((tag) => (
            <span
              key={tag}
              className="bg-secondary/60 text-secondary-foreground font-medium px-3 py-1 text-sm rounded border border-secondary/50 hover:bg-secondary/70 transition-colors"
            >
              {tag.trim()}
            </span>
          ))}
        </div>
        <button className="md:hidden w-full bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors mt-4 shadow-sm hover:shadow font-medium">
          Join Group
        </button>
      </div>

      {/* Topics Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-foreground">Topics</h2>
          <button className="text-primary bg-primary/20 hover:bg-primary/30 transition-colors flex items-center gap-2 px-4 py-2 rounded border border-primary/40 font-medium">
            <MessageCircle className="h-4 w-4" />
            New Topic
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <Card
              key={topic.id}
              className="border border-border/70 bg-gradient-to-b from-card to-card/60 backdrop-blur-sm hover:shadow-md hover:border-border transition-all duration-300 cursor-pointer rounded"
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-lg font-medium text-foreground">
                    {topic.title}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-foreground/90 font-medium bg-background/80 px-2 py-1 rounded border border-border/70">
                    <MessageCircle className="h-3 w-3 text-primary" />
                    <span>{topic.replies}</span>
                  </div>
                </CardTitle>
                <CardDescription className="line-clamp-2 mt-2 text-foreground/80">
                  {topic.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-foreground/80">
                  <div className="flex items-center gap-2">
                    <User className="h-3 w-3 text-primary" />
                    <span>@sprout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3 text-primary" />
                    <span>
                      {hrt(
                        new Date(topic.createdAt as unknown as string),
                        "%relative% ago"
                      )}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
