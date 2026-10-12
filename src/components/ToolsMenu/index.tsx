import { fontSizes, textColours } from '@/design-system/styles/typography';
import { SymbolView } from 'expo-symbols';
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { setActiveTool, useActiveTool } from './activeToolStore';
import { CoverPicker } from './CoverPicker';
import { SoilPicker } from './SoilPicker';
import type { RootTool } from './types';

const ROOT_TOOLS: { root: RootTool; label: string }[] = [
  { root: 'soil', label: 'Soil' },
  { root: 'cover', label: 'Cover' },
  { root: 'zone', label: 'Zone' },
];

const PLACEHOLDER_OPTION = 'example';
const PLACEHOLDER_LABEL = 'Example option';
const ACTIVE_COLOUR = '#4CAF50';

type Panel = 'root' | RootTool;

const ToolsMenu = () => {
  const activeTool = useActiveTool();
  const [isOpen, setIsOpen] = useState(false);
  const [panel, setPanel] = useState<Panel>('root');

  const openSheet = () => {
    setPanel(activeTool?.root ?? 'root');
    setIsOpen(true);
  };

  const closeSheet = () => setIsOpen(false);

  const selectOption = (root: RootTool, option: string) => {
    const isSameOption = activeTool?.root === root && activeTool?.option === option;
    setActiveTool(isSameOption ? null : { root, option });
    setIsOpen(false);
  };

  const renderRoot = () => (
    <View style={styles.list}>
      <Text style={styles.title}>Tools</Text>
      {ROOT_TOOLS.map((tool) => {
        const isActive = activeTool?.root === tool.root;
        return (
          <Pressable
            key={tool.root}
            onPress={() => setPanel(tool.root)}
            style={[styles.row, isActive && styles.rowActive]}
          >
            <Text style={[styles.rowLabel, isActive && styles.rowLabelActive]}>{tool.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );

  const renderSubMenu = (root: RootTool) => {
    const rootLabel = ROOT_TOOLS.find((t) => t.root === root)?.label;
    const activeOption = activeTool?.root === root ? activeTool.option : null;

    return (
      <View style={styles.list}>
        <Pressable onPress={() => setPanel('root')} hitSlop={8} style={styles.back}>
          <Text style={styles.backLabel}>‹ Back</Text>
        </Pressable>
        <Text style={styles.title}>{rootLabel}</Text>
        {root === 'soil' ? (
          <SoilPicker
            activeOption={activeOption}
            onSelect={(option) => selectOption('soil', option)}
          />
        ) : root === 'cover' ? (
          <CoverPicker
            activeOption={activeOption}
            onSelect={(option) => selectOption('cover', option)}
          />
        ) : (
          <Pressable
            onPress={() => selectOption(root, PLACEHOLDER_OPTION)}
            style={[styles.row, activeOption === PLACEHOLDER_OPTION && styles.rowActive]}
          >
            <Text
              style={[
                styles.rowLabel,
                activeOption === PLACEHOLDER_OPTION && styles.rowLabelActive,
              ]}
            >
              {PLACEHOLDER_LABEL}
            </Text>
          </Pressable>
        )}
      </View>
    );
  };

  return (
    <>
      <Pressable onPress={openSheet} hitSlop={8} style={styles.headerButton}>
        <SymbolView
          name={activeTool ? 'wrench.and.screwdriver.fill' : 'wrench.and.screwdriver'}
          tintColor={activeTool ? ACTIVE_COLOUR : textColours.base}
          size={22}
          fallback={
            <Text style={[styles.fallback, activeTool !== null && styles.fallbackActive]}>
              Tools
            </Text>
          }
        />
      </Pressable>
      <Modal visible={isOpen} animationType="slide" transparent onRequestClose={closeSheet}>
        <View style={styles.container}>
          <Pressable style={StyleSheet.absoluteFill} onPress={closeSheet} />
          <View style={styles.sheet}>{panel === 'root' ? renderRoot() : renderSubMenu(panel)}</View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  headerButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  fallback: {
    fontSize: fontSizes.text,
    color: textColours.base,
  },
  fallbackActive: {
    color: ACTIVE_COLOUR,
    fontWeight: '600',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  sheet: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },
  list: {
    gap: 8,
  },
  title: {
    fontSize: fontSizes.h4,
    color: textColours.base,
    fontWeight: '600',
    marginBottom: 4,
  },
  row: {
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
  rowLabel: {
    fontSize: fontSizes.text,
    color: textColours.base,
  },
  rowLabelActive: {
    color: '#fff',
    fontWeight: '600',
  },
  back: {
    paddingVertical: 4,
    marginBottom: 4,
  },
  backLabel: {
    fontSize: fontSizes.text,
    color: textColours.base,
  },
});

export { ToolsMenu };
