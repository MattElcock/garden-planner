import { headings } from '@/design-system/styles/headings';
import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  const onAddGardenClick = () => {
    router.push('/create-garden');
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.heading}>My gardens</Text>
        <Button title="Add garden" onPress={onAddGardenClick} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontSize: headings.h2,
  },
});
