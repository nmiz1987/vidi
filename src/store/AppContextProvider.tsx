import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { createContext, useContext } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

export const AppContext = createContext<object>({});

export function AppContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <AppContext.Provider value={{}}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <StatusBar style="dark" />
          {children}
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
