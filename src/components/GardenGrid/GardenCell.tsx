import { useActiveTool } from '@/components/ToolsMenu/activeToolStore';
import { ERASER_OPTION } from '@/components/ToolsMenu/SoilPicker';
import { useGetGardenCell } from '@/hooks/useGetGardenCell';
import { useUpdateCellCover } from '@/hooks/useUpdateCellCover';
import { useUpdateCellSoil } from '@/hooks/useUpdateCellSoil';
import { Pressable, StyleSheet, View } from 'react-native';
import { coverColours } from './coverColours';
import { soilColours } from './soilColours';

interface GardenCellProps {
  gardenId: string;
  defaultSoilId: string;
  coord_x: number;
  coord_y: number;
}

const GardenCell = ({ gardenId, defaultSoilId, coord_x, coord_y }: GardenCellProps) => {
  const cell = useGetGardenCell(gardenId, coord_x, coord_y);
  const activeTool = useActiveTool();
  const { execute: updateCellSoil } = useUpdateCellSoil();
  const { execute: updateCellCover } = useUpdateCellCover();

  if (!cell) {
    return <View style={styles.cell} />;
  }

  const handlePress = () => {
    if (activeTool?.root === 'soil') {
      const nextSoilId = activeTool.option === ERASER_OPTION ? defaultSoilId : activeTool.option;
      updateCellSoil(cell.id, nextSoilId);
      return;
    }
    if (activeTool?.root === 'cover') {
      const nextCoverId = activeTool.option === ERASER_OPTION ? null : activeTool.option;
      updateCellCover(cell.id, nextCoverId);
    }
  };

  const backgroundColor = cell.cover ? coverColours[cell.cover.id] : soilColours[cell.soil.id];

  return <Pressable onPress={handlePress} style={[styles.cell, { backgroundColor }]} />;
};

const styles = StyleSheet.create({
  cell: {
    flex: 1,
    aspectRatio: 1,
    borderLeftWidth: 1,
    borderColor: 'black',
  },
});

export { GardenCell };
