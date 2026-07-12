CREATE TABLE `garden_cells` (
	`id` text PRIMARY KEY NOT NULL,
	`garden_id` text NOT NULL,
	`x` integer NOT NULL,
	`y` integer NOT NULL,
	`soil_id` text
);
--> statement-breakpoint
CREATE TABLE `gardens` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`units` text NOT NULL,
	`width` real NOT NULL,
	`length` real NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `soil` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`ph` real
);
