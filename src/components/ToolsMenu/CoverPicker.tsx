import { coverColours } from '@/components/GardenGrid/coverColours';
import { fontSizes, textColours } from '@/design-system/styles/typography';
import { useListCoverTypes } from '@/hooks/useListCoverTypes';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ERASER_OPTION } from './SoilPicker';

const ACTIVE_COLOUR = '#4CAF50';

interface CoverPickerProps {
  activeOption: string | null;
  onSelect: (option: string) => void;
}

const CoverPicker = ({ activeOption, onSelect }: CoverPickerProps) => {
  const { coverTypes } = useListCoverTypes();

  return (
    <View style={styles.list}>
      {coverTypes.map((coverType) => {
        const isActive = activeOption === coverType.id;
        return (
          <Pressable
            key={coverType.id}
            onPress={() => onSelect(coverType.id)}
            style={[styles.row, isActive && styles.rowActive]}
          >
            <View style={[styles.swatch, { backgroundColor: coverColours[coverType.id] }]} />
            <Text style={[styles.rowLabel, isActive && styles.rowLabelActive]}>
              {coverType.name}
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

export { CoverPicker };
