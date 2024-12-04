import { Text } from 'react-native';
import { Link } from 'expo-router';
import { Screen } from '@/components/Screen/Screen';

export default function HomeScreen() {
  return (
    <Screen contentContainerClassName="bg-green-200 flex-1 justify-center items-center">
      <Text className="font-pblack text-4xl">Home</Text>
      <Link href="/(main)/profile">Profile</Link>
    </Screen>
  );
}
