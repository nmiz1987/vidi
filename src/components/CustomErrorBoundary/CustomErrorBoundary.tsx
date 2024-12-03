import { ErrorBoundaryProps } from 'expo-router';
import { Button, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Box } from '../Box/Box';
import { Spacer } from '../Spacer';

export function CustomErrorBoundary({ error, retry }: ErrorBoundaryProps) {
  const insets = useSafeAreaInsets();
  return (
    <Box
      style={{
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: insets.top + 20,
        paddingBottom: insets.bottom + 20,
      }}>
      <Text style={{ textAlign: 'center', fontStyle: 'normal', fontWeight: 'bold', fontSize: 24 }}>Something went wrong...</Text>
      <Spacer size={24} />
      <Text style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: 18 }}>Message:</Text>
      <Text style={{ fontStyle: 'normal', fontWeight: '400', fontSize: 16 }}>{error.message}</Text>
      <Spacer size={16} />
      <Text style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: 18 }}>Stack:</Text>
      <Box scroll>
        <Text>{JSON.stringify(error.stack, null, 2)}</Text>
      </Box>
      <Spacer />
      <Button title="Try again" onPress={retry} />
    </Box>
  );
}
