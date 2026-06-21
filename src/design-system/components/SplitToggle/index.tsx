import { fontSizes, textColours } from '@/design-system/styles/typography';
import {
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
  useFormContext,
  useFormState,
} from 'react-hook-form';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Option {
  label: string;
  value: string;
}

interface SplitToggleProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  options: Option[];
  rules?: RegisterOptions<T>;
}

const SplitToggle = <T extends FieldValues>({
  label,
  name,
  options,
  rules,
}: SplitToggleProps<T>) => {
  const { control } = useFormContext<T>();
  const { errors } = useFormState({ control, name });
  const error = errors[name];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        name={name}
        rules={rules}
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
      {error?.message && <Text style={styles.error}>{error.message.toString()}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  label: {
    fontSize: fontSizes.text,
    fontWeight: 'semibold',
    color: textColours.base,
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
    fontSize: fontSizes.text,
    color: textColours.base,
  },
  optionTextActive: {
    color: '#fff',
    fontWeight: '600',
  },
  error: {
    color: textColours.error,
    fontSize: fontSizes.textSmall,
  },
});

export { SplitToggle };
