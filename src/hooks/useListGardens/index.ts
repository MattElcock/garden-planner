import db from '@/db/database';
import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';

interface GardenDb {
  id: string;
  name: string;
  units: 'metric' | 'imperial';
  created_at: string;
}

interface Garden {
  id: string;
  name: string;
  units: 'metric' | 'imperial';
  createdAt: Date;
}

const listGardens = () => {
  const gardensDatabase = db.getAllSync<GardenDb>('SELECT * FROM gardens ORDER BY created_at DESC');

  const gardens: Garden[] = gardensDatabase.map((garden) => ({
    id: garden.id,
    name: garden.name,
    units: garden.units,
    createdAt: new Date(garden.created_at),
  }));

  return gardens;
};

const useListGardens = () => {
  const [gardens, setGardens] = useState<Garden[]>([]);

  useFocusEffect(
    useCallback(() => {
      const gardens = listGardens();
      setGardens(gardens);
    }, [])
  );

  return { gardens };
};

export { useListGardens };
