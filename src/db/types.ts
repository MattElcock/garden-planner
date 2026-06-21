interface GardenDb {
  id: string;
  name: string;
  units: 'meters' | 'feet';
  width: number;
  length: number;
  created_at: string;
}

export type { GardenDb };
