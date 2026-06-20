import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { Input } from '../../design-system/components/Input';
import { SplitToggle } from '../../design-system/components/SplitToggle';

export default function CreateGarden() {
  const { control } = useForm();

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
    </View>
  );
}
