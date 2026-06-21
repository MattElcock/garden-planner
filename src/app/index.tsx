import { Card } from '@/design-system/components/Card';
import { headings } from '@/design-system/styles/headings';
import { useListGardens } from '@/hooks/useListGardens';
import { useRouter } from 'expo-router';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  const { gardens } = useListGardens();

  const onAddGardenClick = () => {
    router.push('/create-garden');
  };

  const onGardenClick = (gardenId: string) => {
    console.log(`Garden clicked: ${gardenId}`);
  };

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.heading}>My gardens</Text>
        <Button title="Add garden" onPress={onAddGardenClick} />
      </View>
      <View style={styles.gardenList}>
        {gardens.map((garden) => (
          <Pressable key={garden.id} onPress={() => onGardenClick(garden.id)}>
            <Card>
              <Text>{garden.name}</Text>
            </Card>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    gap: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontSize: headings.h2,
  },
  gardenList: {
    gap: 12,
  },
});
