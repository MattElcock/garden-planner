import { db } from '@/db/client';
import { cover_types, garden_cells, soil } from '@/db/schema';
import { useLiveQuery } from 'drizzle-orm/expo-sqlite';
import { and, eq } from 'drizzle-orm/sql';

interface Soil {
  id: string;
  name: string;
}

interface Cover {
  id: string;
  name: string;
}

interface GardenCell {
  id: string;
  gardenId: string;
  coordX: number;
  coordY: number;
  soil: Soil;
  cover: Cover | null;
}

const useGetGardenCell = (
  gardenId: string,
  coord_x: number,
  coord_y: number
): GardenCell | null => {
  const { data = [] } = useLiveQuery(
    db
      .select()
      .from(garden_cells)
      .where(
        and(
          eq(garden_cells.garden_id, gardenId),
          eq(garden_cells.coord_x, coord_x),
          eq(garden_cells.coord_y, coord_y)
        )
      )
      .leftJoin(soil, eq(soil.id, garden_cells.soil_id))
      .leftJoin(cover_types, eq(cover_types.id, garden_cells.cover_id))
      .limit(1)
  );

  if (data.length === 0) {
    return null;
  }

  const { garden_cells: cell, soil: soilType, cover_types: coverType } = data[0];

  if (!soilType) {
    return null;
  }

  return {
    id: cell.id,
    gardenId: cell.garden_id,
    coordX: Number(cell.coord_x),
    coordY: Number(cell.coord_y),
    soil: {
      id: soilType.id,
      name: soilType.name,
    },
    cover: coverType ? { id: coverType.id, name: coverType.name } : null,
  };
};

export { useGetGardenCell };
