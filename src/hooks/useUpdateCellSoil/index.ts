import { db } from '@/db/client';
import { garden_cells } from '@/db/schema';
import { eq } from 'drizzle-orm/sql';

const useUpdateCellSoil = () => {
  const execute = (cellId: string, soilId: string) => {
    db.update(garden_cells).set({ soil_id: soilId }).where(eq(garden_cells.id, cellId)).run();
  };

  return { execute };
};

export { useUpdateCellSoil };
