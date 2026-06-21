import { initDatabase } from '@/db/database';
import { Stack } from 'expo-router';
import { useEffect } from 'react';

export default () => {
  useEffect(() => {
    initDatabase();
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="create-garden" options={{ headerShown: false }} />
      <Stack.Screen name="garden/[id]" options={{ headerShown: false }} />
    </Stack>
  );
};
