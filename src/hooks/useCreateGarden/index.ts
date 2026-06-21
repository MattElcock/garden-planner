import db from '@/db/database';
import * as Crypto from 'expo-crypto';

interface CreateGardenInput {
  name: string;
  units: 'metric' | 'imperial';
}

const useCreateGarden = () => {
  const execute = (data: CreateGardenInput) => {
    const id = Crypto.randomUUID();
    const createdAt = new Date().toISOString();

    db.runSync('INSERT INTO gardens (id, name, units, created_at) VALUES (?, ?, ?, ?)', [
      id,
      data.name,
      data.units,
      createdAt,
    ]);

    console.info(
      `Garden created with ID: ${id}, Name: ${data.name}, Units: ${data.units}, Created At: ${createdAt}`
    );
  };

  return { execute };
};

export { useCreateGarden };
