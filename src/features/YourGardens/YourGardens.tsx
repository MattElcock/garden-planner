import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';
import { styles } from './styles';

const YourGardens = () => {
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
};

export { YourGardens };
