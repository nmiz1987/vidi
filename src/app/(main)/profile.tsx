import { StyleSheet, Text } from 'react-native';
import { Screen } from '@/components/Screen/Screen';
import { Link } from 'expo-router';

export default function ProfileScreen() {
  return (
    <Screen contentContainerStyle={styles.container}>
      <Text>Profile</Text>
      <Link href="/(main)">Home</Link>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
