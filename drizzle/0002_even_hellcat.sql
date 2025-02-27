ALTER TABLE "topics" RENAME COLUMN "questions" TO "groups";--> statement-breakpoint
ALTER TABLE "groups" DROP CONSTRAINT "groups_topics_topics_id_fk";
--> statement-breakpoint
ALTER TABLE "topics" DROP CONSTRAINT "topics_questions_community_questions_id_fk";
--> statement-breakpoint
ALTER TABLE "topics" ADD CONSTRAINT "topics_groups_groups_id_fk" FOREIGN KEY ("groups") REFERENCES "public"."groups"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "groups" DROP COLUMN "topics";