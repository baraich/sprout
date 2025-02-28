import { sql } from "drizzle-orm";
import { integer, varchar, timestamp, pgTable } from "drizzle-orm/pg-core";

export type User = typeof users.$inferSelect;
export const users = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),

  name: varchar().notNull(),
  email: varchar().notNull(),
  password: varchar().notNull(),
  avatar: varchar().notNull(),
  bio: varchar().notNull(),

  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().$onUpdateFn(() => sql`now()`),
});
