import { StyleSheet, View } from 'react-native';

interface GardenGridProps {
  width: number;
  length: number;
}

const GardenGrid = ({ width, length }: GardenGridProps) => {
  const rows = new Array(Math.ceil(length)).fill(0);
  const columns = new Array(Math.ceil(width)).fill(0);

  return (
    <View style={styles.grid}>
      {rows.map((_, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {columns.map((_, colIndex) => (
            <Cell key={`${rowIndex}-${colIndex}`} />
          ))}
        </View>
      ))}
    </View>
  );
};

const Cell = () => {
  return <View style={styles.cell} />;
};

const styles = StyleSheet.create({
  page: {
    padding: 20,
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: 'black',
  },
  grid: {
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  cell: {
    flex: 1,
    aspectRatio: 1,
    borderLeftWidth: 1,
    borderColor: 'black',
  },
});

export { GardenGrid };
