import { Stack } from 'expo-router';
import { useDrizzleStudio } from 'expo-drizzle-studio-plugin';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import { db, nativeDb } from '@/db/client';
import migrations from '@/db/migrations';
import { Text, View } from 'react-native';

export default () => {
  const { success, error } = useMigrations(db, migrations);

  // Enable Drizzle Studio in dev via plugin hook
  if (__DEV__) {
    useDrizzleStudio(nativeDb);
  }

  if (!success && !error) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Preparing database…</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
        <Text style={{ marginBottom: 8 }}>Database migration failed.</Text>
        <Text>{error.message}</Text>
      </View>
    );
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="create-garden" options={{ headerShown: false }} />
      <Stack.Screen name="garden/[id]" options={{ headerShown: false }} />
    </Stack>
  );
};
