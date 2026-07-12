import { StyleSheet, View } from 'react-native';
import { GardenCell } from './GardenCell';

interface GardenGridProps {
  id: string;
  width: number;
  length: number;
}

const GardenGrid = ({ id, width, length }: GardenGridProps) => {
  const rowCount = new Array(Math.ceil(length)).fill(0);
  const colCount = new Array(Math.ceil(width)).fill(0);

  return (
    <View style={styles.grid}>
      {rowCount.map((_, yIndex) => (
        <View key={yIndex} style={styles.row}>
          {colCount.map((_, xIndex) => (
            <GardenCell
              key={`${xIndex}-${yIndex}`}
              gardenId={id}
              coord_x={xIndex}
              coord_y={yIndex}
            />
          ))}
        </View>
      ))}
    </View>
  );
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
});

export { GardenGrid };
