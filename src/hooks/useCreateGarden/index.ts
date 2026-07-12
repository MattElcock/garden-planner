import { db } from '@/db/client';
import { gardens } from '@/db/schema';
import * as Crypto from 'expo-crypto';

interface CreateGardenInput {
  name: string;
  units: 'meters' | 'feet';
  width: number;
  length: number;
  soilType: string;
}

const useCreateGarden = () => {
  const execute = (data: CreateGardenInput) => {
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

  return { execute };
};

export { useCreateGarden };
