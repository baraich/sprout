import { sql } from "drizzle-orm";
import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

export type Group = typeof groups.$inferSelect;
export const groups = pgTable("groups", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar().notNull(),
  tags: varchar().notNull(),
  description: varchar().notNull(),
  usersJoined: integer().notNull().default(0),

  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().$onUpdateFn(() => sql`now()`),

  topics: integer().references(() => topics.id),
});

export const topics = pgTable("topics", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  questions: integer().references(() => questions.id),
});

export const questions = pgTable("community_questions", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
});

export const replies = pgTable("community_replies", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
});
