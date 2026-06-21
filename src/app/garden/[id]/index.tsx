import { StyleSheet, Text, View } from 'react-native';

export default function ViewGarden() {
  return (
    <View style={styles.page}>
      <Text>Hi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 20,
    gap: 8,
  },
});
