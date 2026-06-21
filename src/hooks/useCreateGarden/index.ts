import db from '@/db/database';
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

    db.runSync(
      'INSERT INTO gardens (id, name, units, width, length, created_at) VALUES (?, ?, ?, ?, ?, ?)',
      [id, data.name, data.units, data.width, data.length, createdAt]
    );

    console.info(
      `Garden created with ID: ${id}, Name: ${data.name}, Units: ${data.units}, Width: ${data.width}, Length: ${data.length}, Created At: ${createdAt}`
    );
  };

  return { execute };
};

export { useCreateGarden };
