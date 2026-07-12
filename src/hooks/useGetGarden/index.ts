import { eq } from 'drizzle-orm/sql';
import { useLiveQuery } from 'drizzle-orm/expo-sqlite';
import { db } from '@/db/client';
import { gardens } from '@/db/schema';
import { useMemo } from 'react';

interface Garden {
  id: string;
  name: string;
  units: 'meters' | 'feet';
  width: number;
  length: number;
  createdAt: Date;
}

const useGetGarden = (id: string) => {
  const { data: row } = useLiveQuery(db.select().from(gardens).where(eq(gardens.id, id)).limit(1));

  const garden = useMemo(() => {
    if (!row || row.length === 0) return undefined;
    const g: any = row[0];
    return {
      id: g.id,
      name: g.name,
      units: g.units,
      width: g.width,
      length: g.length,
      createdAt: new Date(g.created_at),
    } as Garden;
  }, [row]);

  return { garden };
};

export { useGetGarden };
