PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_garden_cells` (
	`id` text PRIMARY KEY NOT NULL,
	`garden_id` text,
	`coord_x` integer NOT NULL,
	`coord_y` integer NOT NULL,
	`soil_id` text,
	FOREIGN KEY (`garden_id`) REFERENCES `gardens`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`soil_id`) REFERENCES `soil`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_garden_cells`("id", "garden_id", "coord_x", "coord_y", "soil_id") SELECT "id", "garden_id", "coord_x", "coord_y", "soil_id" FROM `garden_cells`;--> statement-breakpoint
DROP TABLE `garden_cells`;--> statement-breakpoint
ALTER TABLE `__new_garden_cells` RENAME TO `garden_cells`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE UNIQUE INDEX `soil_name_unique` ON `soil` (`name`);--> statement-breakpoint
ALTER TABLE `soil` DROP COLUMN `description`;--> statement-breakpoint
ALTER TABLE `soil` DROP COLUMN `ph`;