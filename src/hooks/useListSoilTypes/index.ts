import { db } from '@/db/client';
import { soil } from '@/db/schema';
import { useLiveQuery } from 'drizzle-orm/expo-sqlite';
import { desc } from 'drizzle-orm/sql';
import { useMemo } from 'react';

interface SoilType {
  id: string;
  name: string;
}

const useListSoilTypes = () => {
  const { data: rows } = useLiveQuery(db.select().from(soil).orderBy(desc(soil.name)));

  const soilTypes: SoilType[] = useMemo(() => {
    return rows.map((r: any) => ({
      id: r.id,
      name: r.name,
    }));
  }, [rows]);

  return { soilTypes };
};

export { useListSoilTypes };
