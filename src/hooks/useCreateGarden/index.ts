import { db } from '@/db/client';
import { garden_cells, gardens } from '@/db/schema';
import * as Crypto from 'expo-crypto';

interface CreateGardenInput {
  name: string;
  units: 'meters' | 'feet';
  width: number;
  length: number;
  soilType: string;
}

const createGarden = (data: CreateGardenInput) => {
  const id = Crypto.randomUUID();
  const createdAt = new Date().toISOString();

  db.insert(gardens)
    .values({
      id,
      name: data.name,
      units: data.units,
      width: data.width,
      length: data.length,
      default_soil_id: data.soilType,
      created_at: createdAt,
    })
    .run();

  return id;
};

const createCells = (gardenId: string, width: number, length: number, soilType: string) => {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < length; y++) {
      const id = Crypto.randomUUID();
      db.insert(garden_cells)
        .values({
          id,
          garden_id: gardenId,
          coord_x: x,
          coord_y: y,
          soil_id: soilType,
        })
        .run();
    }
  }
};

const useCreateGarden = () => {
  const execute = (data: CreateGardenInput) => {
    const id = createGarden(data);
    createCells(id, data.width, data.length, data.soilType);

    return id;
  };

  return { execute };
};

export { useCreateGarden };
