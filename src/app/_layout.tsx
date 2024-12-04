import '../../global.css';
import { useFonts } from 'expo-font';
import { ErrorBoundaryProps, Stack, SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { AppContextProvider } from '@/store/AppContextProvider';
import { CustomErrorBoundary } from '@/components/CustomErrorBoundary/CustomErrorBoundary';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// Expo Router uses Error Boundaries to catch errors in the navigation tree.
// This MUST be here to catch errors in the navigation tree.
export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
  return <CustomErrorBoundary error={error} retry={retry} />;
}

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AppContextProvider>
      <Stack>
        <Stack.Screen name="(main)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </AppContextProvider>
  );
}
