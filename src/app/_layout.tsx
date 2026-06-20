import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { initDatabase } from '../db/database';

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
