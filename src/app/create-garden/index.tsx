import { Input } from '@/design-system/components/Input';
import { SplitToggle } from '@/design-system/components/SplitToggle';
import { useCreateGarden } from '@/hooks/useCreateGarden';
import { useRouter } from 'expo-router';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, StyleSheet, View } from 'react-native';

interface FormData {
  gardenName: string;
  units: 'metric' | 'imperial';
}

export default function CreateGarden() {
  const router = useRouter();

  const methods = useForm<FormData>();
  const { execute } = useCreateGarden();

  const onSubmit = (data: FormData) => {
    execute({
      name: data.gardenName,
      units: data.units,
    });

    router.push('/');
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
            { label: 'Metric', value: 'metric' },
            { label: 'Imperial', value: 'imperial' },
          ]}
        />
        <Button title="Create Garden" onPress={methods.handleSubmit(onSubmit)} />
      </View>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
});
