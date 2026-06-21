import { useGetGarden } from '@/hooks/useGetGarden';
import { Stack, useLocalSearchParams } from 'expo-router';

export default () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { garden } = useGetGarden(id);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: garden.name }} />
    </Stack>
  );
};
