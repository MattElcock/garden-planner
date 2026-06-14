import { Stack } from 'expo-router';

export default () => {
  return (
    <Stack screenOptions={{ contentStyle: { padding: 20 } }}>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="create-garden" options={{ title: 'Create a garden' }} />
    </Stack>
  );
};
