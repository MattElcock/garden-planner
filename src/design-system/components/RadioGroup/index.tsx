import { fontSizes, textColours } from '@/design-system/styles/typography';
import {
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
  useFormContext,
  useFormState,
} from 'react-hook-form';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface RadioOption {
  label: string;
  value: string;
  description?: string;
}

interface RadioGroupProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  helperText?: string;
  options: RadioOption[];
  rules?: RegisterOptions<T>;
}

const RadioGroup = <T extends FieldValues>({
  label,
  helperText,
  name,
  options,
  rules,
}: RadioGroupProps<T>) => {
  const { control } = useFormContext<T>();
  const { errors } = useFormState({ control, name });
  const error = errors[name];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {helperText && <Text style={styles.helperText}>{helperText}</Text>}
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <View style={styles.options}>
            {options.map((option) => (
              <Pressable
                key={option.value}
                style={styles.option}
                onPress={() => onChange(option.value)}
              >
                <View style={styles.radioRow}>
                  <View style={styles.radio}>
                    {value === option.value && <View style={styles.radioSelected} />}
                  </View>
                  <View style={styles.optionContent}>
                    <Text style={styles.optionLabel}>{option.label}</Text>
                    {option.description && (
                      <Text style={styles.optionDescription}>{option.description}</Text>
                    )}
                  </View>
                </View>
              </Pressable>
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
    color: textColours.base,
  },
  helperText: {
    fontSize: fontSizes.text,
    color: textColours.base,
    marginBottom: 4,
  },
  options: {
    gap: 8,
  },
  option: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  radioSelected: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4CAF50',
  },
  optionContent: {
    flex: 1,
    gap: 2,
  },
  optionLabel: {
    fontSize: fontSizes.text,
    color: textColours.base,
  },
  optionDescription: {
    fontSize: fontSizes.text,
    color: textColours.base,
  },
  error: {
    color: textColours.error,
    fontSize: fontSizes.textSmall,
  },
});

export { RadioGroup };
export type { RadioOption };
