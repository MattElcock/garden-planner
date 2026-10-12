import { db } from '@/db/client';
import { cover_types } from '@/db/schema';

const data = [
  { id: 'gravel', name: 'Gravel' },
  { id: 'pebbles', name: 'Pebbles' },
  { id: 'slabs', name: 'Slabs' },
  { id: 'wood_chip', name: 'Wood chip' },
  { id: 'decking', name: 'Decking' },
  { id: 'grass_lawn', name: 'Grass lawn' },
  { id: 'clover_lawn', name: 'Clover lawn' },
];

const seedCoverTypes = () => {
  const existing = db.select().from(cover_types).all();

  const coverData = data.filter(
    (item) => !existing.some((existingItem) => existingItem.id === item.id)
  );

  if (coverData.length > 0) {
    db.insert(cover_types).values(coverData).run();
  }
};

export { seedCoverTypes };
