import { db } from "@/db/drizzle";
import { groups, topics } from "@/db/schema/community";
import { eq } from "drizzle-orm";

export const getGroups = async function () {
  return await db.select().from(groups);
};

export const getGroup = async function (groupId: number) {
  return (
    (
      await db.select().from(groups).where(eq(groups.id, groupId)).limit(1)
    )?.[0] || null
  );
};

export const getTopicsUsingGroup = async function (groupId: number) {
  return await db.select().from(topics).where(eq(topics.groups, groupId));
};
