import db from '@/db/database';
import { GardenDb } from '@/db/types';
import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';

interface Garden {
  id: string;
  name: string;
  units: 'meters' | 'feet';
  width: number;
  length: number;
  createdAt: Date;
}

const getGarden = (id: string) => {
  const garden = db.getFirstSync<GardenDb>('SELECT * FROM gardens WHERE id = ?', [id]);

  if (!garden) {
    throw new Error(`Garden with id ${id} not found`);
  }

  return {
    id: garden.id,
    name: garden.name,
    units: garden.units,
    width: garden.width,
    length: garden.length,
    createdAt: new Date(garden.created_at),
  };
};

const useGetGarden = (id: string) => {
  const [garden, setGarden] = useState<Garden>({} as Garden);

  useFocusEffect(
    useCallback(() => {
      const garden = getGarden(id);
      setGarden(garden);
    }, [])
  );

  return { garden };
};

export { useGetGarden };
