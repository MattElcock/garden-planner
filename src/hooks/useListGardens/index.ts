import { db } from '@/db/client';
import { gardens } from '@/db/schema';
import { useLiveQuery } from 'drizzle-orm/expo-sqlite';
import { desc } from 'drizzle-orm/sql';

import { useMemo } from 'react';

interface Garden {
  id: string;
  name: string;
  units: 'meters' | 'feet';
  createdAt: Date;
}

const useListGardens = () => {
  const { data: rows } = useLiveQuery(db.select().from(gardens).orderBy(desc(gardens.created_at)));

  const mapped = useMemo(() => {
    if (!rows) return [] as Garden[];
    return rows.map((r: any) => ({
      id: r.id,
      name: r.name,
      units: r.units,
      createdAt: new Date(r.created_at),
    }));
  }, [rows]);

  return { gardens: mapped };
};

export { useListGardens };
