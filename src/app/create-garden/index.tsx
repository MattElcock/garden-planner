import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { Input } from '../../design-system/components/Input';

export default function CreateGarden() {
  const { control } = useForm();

  return (
    <View>
      <Input control={control} label="Garden Name" name="gardenName" />
    </View>
  );
}
