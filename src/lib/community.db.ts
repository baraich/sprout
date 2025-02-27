import { db } from "@/db/drizzle";
import { groups } from "@/db/schema/community";

export const getGroups = async function () {
  return await db.select().from(groups);
};
