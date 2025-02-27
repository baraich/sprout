ALTER TABLE "topics" ADD COLUMN "title" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "topics" ADD COLUMN "description" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "topics" ADD COLUMN "replies" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "topics" ADD COLUMN "createdAt" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "topics" ADD COLUMN "updatedAt" timestamp;