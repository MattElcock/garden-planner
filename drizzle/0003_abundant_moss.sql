CREATE TABLE `cover_types` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `cover_types_name_unique` ON `cover_types` (`name`);--> statement-breakpoint
ALTER TABLE `garden_cells` ADD `cover_id` text REFERENCES cover_types(id);