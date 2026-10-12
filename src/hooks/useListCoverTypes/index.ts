import { db } from '@/db/client';
import { cover_types } from '@/db/schema';
import { useLiveQuery } from 'drizzle-orm/expo-sqlite';
import { desc } from 'drizzle-orm/sql';
import { useMemo } from 'react';

interface CoverType {
  id: string;
  name: string;
}

const useListCoverTypes = () => {
  const { data: rows } = useLiveQuery(db.select().from(cover_types).orderBy(desc(cover_types.name)));

  const coverTypes: CoverType[] = useMemo(() => {
    return rows.map((r: any) => ({
      id: r.id,
      name: r.name,
    }));
  }, [rows]);

  return { coverTypes };
};

export { useListCoverTypes };
