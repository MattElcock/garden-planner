import { db } from '@/db/client';
import { gardens, soil } from '@/db/schema';
import { useLiveQuery } from 'drizzle-orm/expo-sqlite';
import { eq } from 'drizzle-orm/sql';

interface Garden {
  id: string;
  name: string;
  units: string;
  width: number;
  length: number;
  defaultSoil: string;
  createdAt: Date;
}

const useGetGarden = (gardenId: string): Garden | null => {
  const { data = [] } = useLiveQuery(
    db
      .select()
      .from(gardens)
      .where(eq(gardens.id, gardenId))
      .leftJoin(soil, eq(gardens.default_soil_id, soil.id))
      .limit(1)
  );

  if (data.length === 0) {
    return null;
  }

  const { gardens: garden, soil: defaultSoil } = data[0];

  if (!defaultSoil) {
    return null;
  }

  return {
    id: garden.id,
    name: garden.name,
    units: garden.units,
    width: Number(garden.width),
    length: Number(garden.length),
    defaultSoil: defaultSoil.name,
    createdAt: new Date(garden.created_at),
  };
};

export { useGetGarden };
