import { GardenGrid } from '@/components/GardenGrid';
import { useGetGarden } from '@/hooks/useGetGarden';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function ViewGarden() {
  const { id } = useLocalSearchParams<{ id: string | string[] }>();
  const normalizedId = Array.isArray(id) ? id[0] : id;
  const garden = useGetGarden(normalizedId ?? '');

  if (!garden) {
    return (
      <View>
        <Text>Garden not found.</Text>
      </View>
    );
  }

  const { units, width, length } = garden;

  return (
    <View style={styles.page}>
      <Text>1 cell = 1x1 {units}</Text>
      <Text>
        Garden size: {width} x {length} {units}
      </Text>
      <GardenGrid id={garden.id} width={width} length={length} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 20,
    gap: 8,
  },
});
