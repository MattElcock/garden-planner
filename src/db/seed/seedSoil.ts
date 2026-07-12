import { db } from '@/db/client';
import { soil } from '@/db/schema';

const data = [
  { id: 'loamy', name: 'Loamy' },
  { id: 'sandy', name: 'Sandy' },
  { id: 'clay', name: 'Clay' },
  { id: 'silty', name: 'Silty' },
  { id: 'peaty', name: 'Peaty' },
  { id: 'chalky', name: 'Chalky' },
];

const seedSoil = () => {
  const existing = db.select().from(soil).all();

  const soilData = data.filter(
    (item) => !existing.some((existingItem) => existingItem.id === item.id)
  );

  if (soilData.length > 0) {
    db.insert(soil).values(soilData).run();
  }
};

export { seedSoil };
