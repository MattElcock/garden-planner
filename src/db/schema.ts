import { integer, real, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const gardens = sqliteTable('gardens', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  units: text('units').notNull(),
  width: real('width').notNull(),
  length: real('length').notNull(),
  default_soil_id: text('default_soil_id')
    .notNull()
    .references(() => soil.id),
  created_at: text('created_at').notNull(),
});

export const garden_cells = sqliteTable('garden_cells', {
  id: text('id').primaryKey(),
  garden_id: text('garden_id').references(() => gardens.id),
  coord_x: integer('coord_x').notNull(),
  coord_y: integer('coord_y').notNull(),
  soil_id: text('soil_id').references(() => soil.id),
});

export const soil = sqliteTable('soil', {
  id: text('id').primaryKey(),
  name: text('name').notNull().unique(),
});
