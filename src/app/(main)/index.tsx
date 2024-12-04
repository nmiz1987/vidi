import { StyleSheet, Text } from 'react-native';
import { Screen } from '@/components/Screen/Screen';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <Screen contentContainerStyle={styles.container}>
      <Text>Home</Text>
      <Link href="/(main)/profile">Profile</Link>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
