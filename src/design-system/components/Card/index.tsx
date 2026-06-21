import { StyleSheet, View } from 'react-native';

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 15,
    borderColor: '#666',
    backgroundColor: '#fff',
    borderWidth: 1,
  },
});

export { Card };
