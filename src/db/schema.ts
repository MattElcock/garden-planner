import { sqliteTable, text, real, integer } from 'drizzle-orm/sqlite-core';

export const gardens = sqliteTable('gardens', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  units: text('units').notNull(),
  width: real('width').notNull(),
  length: real('length').notNull(),
  created_at: text('created_at').notNull(),
});

export const soil = sqliteTable('soil', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  ph: real('ph'),
});

export const garden_cells = sqliteTable('garden_cells', {
  id: text('id').primaryKey(),
  garden_id: text('garden_id').notNull(),
  x: integer('x').notNull(),
  y: integer('y').notNull(),
  soil_id: text('soil_id'),
});
