"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Group } from "@/db/schema/community";
import { Users } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

function SkeletonCard() {
  return (
    <Card className="animate-pulse">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="h-4 bg-muted w-1/2 rounded"></span>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span className="h-4 bg-muted w-4 rounded"></span>
          </div>
        </CardTitle>
        <CardDescription className="h-4 bg-muted w-full rounded mt-2"></CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {[...Array(3)].map((_, idx) => (
            <span
              key={idx}
              className="bg-muted text-secondary-foreground px-2 py-1 rounded-md text-sm w-1/3 h-4"
            ></span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function CommunityBrowsePage() {
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    const loadGroups = async () => {
      const fetchGroupsRequest = await fetch("/api/groups");
      const fetchGroupsResponse = await fetchGroupsRequest.json();
      setGroups(fetchGroupsResponse);
      setLoading(false);
    };

    loadGroups();
  }, []);

  return (
    <div className="container mx-auto py-24 px-4 md:px-8 lg:px-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Groups</h1>
        <p className="text-muted-foreground">
          Join a community that understands and supports your journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? [...Array(6)].map((_, index) => <SkeletonCard key={index} />)
          : groups.map((group, index) => (
              <Link key={index} href={`/community/group/${group.id}`}>
                <Card className="hover:shadow-lg transition-shadow duration-300 min-h-56 cursor-pointer hover:border-foreground/30 rounded-none">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{group.name}</span>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{group.usersJoined.toLocaleString()}</span>
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
                          className="bg-secondary text-secondary-foreground px-2 py-1 text-sm"
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
