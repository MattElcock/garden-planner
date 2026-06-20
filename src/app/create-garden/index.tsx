import { useForm } from 'react-hook-form';
import { Button, View } from 'react-native';
import { Input } from '../../design-system/components/Input';
import { SplitToggle } from '../../design-system/components/SplitToggle';
import { useCreateGarden } from '../../hooks/useCreateGarden';

interface FormData {
  gardenName: string;
  units: 'metric' | 'imperial';
}

export default function CreateGarden() {
  const { control, handleSubmit } = useForm<FormData>();

  const { execute } = useCreateGarden();

  const onSubmit = (data: FormData) => {
    execute({
      name: data.gardenName,
      units: data.units,
    });
  };

  return (
    <View>
      <Input control={control} label="Garden Name" name="gardenName" />
      <SplitToggle
        control={control}
        name="units"
        label="Units"
        options={[
          { label: 'Metric', value: 'metric' },
          { label: 'Imperial', value: 'imperial' },
        ]}
      />
      <Button title="Create Garden" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
