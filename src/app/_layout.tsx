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
  const [loaded, error] = useFonts({
    'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-ExtraLight': require('../assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Thin': require('../assets/fonts/Poppins-Thin.ttf'),
  });

  useEffect(() => {
    if (error) throw error;
    if (loaded) SplashScreen.hideAsync();
  }, [loaded, error]);

  if (!loaded) return null;
  if (!loaded && !error) return null;

  return (
    <AppContextProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="profile" options={{ headerShown: false }} />
      </Stack>
    </AppContextProvider>
  );
}
