import { GardenGrid } from '@/components/GardenGrid';
import { useGetGarden } from '@/hooks/useGetGarden';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function ViewGarden() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const {
    garden: { units, width, length },
  } = useGetGarden(id);

  if (!width || !length || !units) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.page}>
      <Text>1 cell = 1x1 {units}</Text>
      <Text>
        Garden size: {width} x {length} {units}
      </Text>
      <GardenGrid width={width} length={length} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 20,
    gap: 8,
  },
});
