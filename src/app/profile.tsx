import { Text } from 'react-native';
import { Link } from 'expo-router';
import { Box } from '@/components/Box/Box';

export default function ProfileScreen() {
  return (
    <Box className="flex-1 items-center justify-center bg-red-500">
      <Text>Profile</Text>
      <Link href="/">Home</Link>
    </Box>
  );
}
