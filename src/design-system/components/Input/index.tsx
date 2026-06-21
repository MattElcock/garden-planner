import { fontSizes, textColours } from '@/design-system/styles/typography';
import {
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
  useFormContext,
  useFormState,
} from 'react-hook-form';
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from 'react-native';

interface InputProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  rules?: RegisterOptions<T>;
  keyboardType?: KeyboardTypeOptions;
}

const Input = <T extends FieldValues>({
  label,
  name,
  rules,
  keyboardType = 'ascii-capable',
}: InputProps<T>) => {
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
          <TextInput
            keyboardType={keyboardType}
            style={styles.input}
            value={value}
            onChangeText={onChange}
          />
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: fontSizes.text,
    color: textColours.base,
    backgroundColor: '#fff',
  },
  error: {
    color: textColours.error,
    fontSize: fontSizes.textSmall,
  },
});

export { Input };
