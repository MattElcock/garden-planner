import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface InputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
}

const Input = <T extends FieldValues>({ control, label, name }: InputProps<T>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} value={value} onChangeText={onChange} />
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: '#2c2c2c',
    backgroundColor: '#fff',
  },
});

export { Input };
