import { Text } from 'react-native';
import { Screen } from '@/components/Screen/Screen';

export default function ProfileScreen() {
  return (
    <Screen contentContainerClassName="bg-green-200 flex-1 justify-center items-center">
      <Text className="font-pblack text-4xl">ProfileScreen</Text>
    </Screen>
  );
}