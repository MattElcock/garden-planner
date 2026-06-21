import { Input } from '@/design-system/components/Input';
import { SplitToggle } from '@/design-system/components/SplitToggle';
import { useCreateGarden } from '@/hooks/useCreateGarden';
import { useRouter } from 'expo-router';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, StyleSheet, View } from 'react-native';

interface FormData {
  gardenName: string;
  units: 'meters' | 'feet';
  length: number;
  width: number;
}

export default function CreateGarden() {
  const router = useRouter();

  const methods = useForm<FormData>();
  const { execute } = useCreateGarden();

  const onSubmit = (data: FormData) => {
    execute({
      name: data.gardenName,
      units: data.units,
      width: data.width,
      length: data.length,
    });

    router.push(`/garden/${data.gardenName}`);
  };

  return (
    <FormProvider {...methods}>
      <View style={styles.container}>
        <Input label="Garden Name" name="gardenName" rules={{ required: 'Required' }} />
        <SplitToggle
          name="units"
          label="Units"
          rules={{ required: 'Required' }}
          options={[
            { label: 'Meters', value: 'meters' },
            { label: 'Feet', value: 'feet' },
          ]}
        />
        <Input
          keyboardType="number-pad"
          label="Length"
          name="length"
          rules={{
            required: 'Required',
            validate: (value) => !isNaN(Number(value)) || 'Length must be a number',
          }}
        />
        <Input
          keyboardType="number-pad"
          label="Width"
          name="width"
          rules={{
            required: 'Required',
            validate: (value) => !isNaN(Number(value)) || 'Width must be a number',
          }}
        />
        <Button
          title="Create Garden"
          onPress={methods.handleSubmit(onSubmit, (errors) => console.log(errors))}
        />
      </View>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 8,
  },
});
