import { useGetGardenCell } from '@/hooks/useGetGardenCell';
import { StyleSheet, View } from 'react-native';

interface GardenCellProps {
  gardenId: string;
  coord_x: number;
  coord_y: number;
}

const GardenCell = ({ gardenId, coord_x, coord_y }: GardenCellProps) => {
  const cell = useGetGardenCell(gardenId, coord_x, coord_y);

  if (!cell) {
    return <View style={styles.cell} />;
  }

  const soilClassMap: Record<string, Object> = {
    clay: styles.clay,
    sandy: styles.sandy,
    loamy: styles.loamy,
    silty: styles.silty,
    peaty: styles.peaty,
    chalky: styles.chalky,
  };

  return <View style={[styles.cell, soilClassMap[cell.soil.id]]} />;
};

const styles = StyleSheet.create({
  cell: {
    flex: 1,
    aspectRatio: 1,
    borderLeftWidth: 1,
    borderColor: 'black',
  },
  clay: {
    backgroundColor: '#B5651D',
  },
  sandy: {
    backgroundColor: '#F4A460',
  },
  loamy: {
    backgroundColor: '#8B4513',
  },
  silty: {
    backgroundColor: '#C2B280',
  },
  peaty: {
    backgroundColor: '#3B2F2F',
  },
  chalky: {
    backgroundColor: '#F5F5DC',
  },
});

export { GardenCell };
