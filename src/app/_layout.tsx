import { initDatabase } from '@/db/database';
import { Stack } from 'expo-router';
import { useEffect } from 'react';

export default () => {
  useEffect(() => {
    initDatabase();
  }, []);

  return (
    <Stack screenOptions={{ contentStyle: { padding: 20 } }}>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="create-garden" options={{ title: 'Create a garden' }} />
    </Stack>
  );
};
