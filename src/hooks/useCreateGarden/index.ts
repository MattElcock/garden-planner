import { db } from '@/db/client';
import { gardens } from '@/db/schema';
import * as Crypto from 'expo-crypto';

interface CreateGardenInput {
  name: string;
  units: 'meters' | 'feet';
  width: number;
  length: number;
}

const useCreateGarden = () => {
  const execute = (data: CreateGardenInput) => {
    const id = Crypto.randomUUID();
    const createdAt = new Date().toISOString();

    // Insert using Drizzle
    db.insert(gardens)
      .values({
        id,
        name: data.name,
        units: data.units,
        width: data.width,
        length: data.length,
        created_at: createdAt,
      })
      .run();

    console.info(
      `Garden created with ID: ${id}, Name: ${data.name}, Units: ${data.units}, Width: ${data.width}, Length: ${data.length}, Created At: ${createdAt}`
    );

    return id;
  };

  return { execute };
};

export { useCreateGarden };
