CREATE TABLE "count" (
	"id" text PRIMARY KEY NOT NULL,
	"count" integer NOT NULL,
	"user_id" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "count" ADD CONSTRAINT "count_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;