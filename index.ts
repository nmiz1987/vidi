import 'expo-router/entry';
import { Platform, UIManager } from 'react-native';

// you can add here code that will be executed before the router starts

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
