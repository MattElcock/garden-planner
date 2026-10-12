import { soilColours } from '@/components/GardenGrid/soilColours';
import { fontSizes, textColours } from '@/design-system/styles/typography';
import { useListSoilTypes } from '@/hooks/useListSoilTypes';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const ERASER_OPTION = 'eraser';
const ACTIVE_COLOUR = '#4CAF50';

interface SoilPickerProps {
  activeOption: string | null;
  onSelect: (option: string) => void;
}

const SoilPicker = ({ activeOption, onSelect }: SoilPickerProps) => {
  const { soilTypes } = useListSoilTypes();

  return (
    <View style={styles.list}>
      {soilTypes.map((soilType) => {
        const isActive = activeOption === soilType.id;
        return (
          <Pressable
            key={soilType.id}
            onPress={() => onSelect(soilType.id)}
            style={[styles.row, isActive && styles.rowActive]}
          >
            <View style={[styles.swatch, { backgroundColor: soilColours[soilType.id] }]} />
            <Text style={[styles.rowLabel, isActive && styles.rowLabelActive]}>
              {soilType.name}
            </Text>
          </Pressable>
        );
      })}
      <Pressable
        onPress={() => onSelect(ERASER_OPTION)}
        style={[styles.row, activeOption === ERASER_OPTION && styles.rowActive]}
      >
        <View style={[styles.swatch, styles.swatchEraser]} />
        <Text style={[styles.rowLabel, activeOption === ERASER_OPTION && styles.rowLabelActive]}>
          Eraser
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  rowActive: {
    backgroundColor: ACTIVE_COLOUR,
    borderColor: ACTIVE_COLOUR,
  },
  swatch: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#2c2c2c',
  },
  swatchEraser: {
    backgroundColor: '#fff',
  },
  rowLabel: {
    fontSize: fontSizes.text,
    color: textColours.base,
  },
  rowLabelActive: {
    color: '#fff',
    fontWeight: '600',
  },
});

export { ERASER_OPTION, SoilPicker };
