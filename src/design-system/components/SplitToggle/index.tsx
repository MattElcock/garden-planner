import { Control, Controller } from 'react-hook-form';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Option {
  label: string;
  value: string;
}

interface SplitToggleProps {
  control: Control;
  name: string;
  label: string;
  options: Option[];
}

const SplitToggle = ({ control, label, name, options }: SplitToggleProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <View style={styles.toggle}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={option.value}
                style={[
                  styles.option,
                  value === option.value && styles.optionActive,
                  index !== 0 && styles.optionBorder,
                ]}
                onPress={() => onChange(option.value)}
              >
                <Text
                  style={[styles.optionText, value === option.value && styles.optionTextActive]}
                >
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
    color: '#2c2c2c',
  },
  toggle: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
  },
  option: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  optionActive: {
    backgroundColor: '#4CAF50',
  },
  optionBorder: {
    borderLeftWidth: 1,
    borderLeftColor: '#ccc',
  },
  optionText: {
    fontSize: 16,
    color: '#2c2c2c',
  },
  optionTextActive: {
    color: '#fff',
    fontWeight: '600',
  },
});

export { SplitToggle };
