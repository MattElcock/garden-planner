import { db } from '@/db/client';
import { garden_cells } from '@/db/schema';
import { eq } from 'drizzle-orm/sql';

const useUpdateCellCover = () => {
  const execute = (cellId: string, coverId: string | null) => {
    db.update(garden_cells).set({ cover_id: coverId }).where(eq(garden_cells.id, cellId)).run();
  };

  return { execute };
};

export { useUpdateCellCover };
