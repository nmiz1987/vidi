import { Platform, Pressable, PressableProps, Text } from 'react-native';
import styles from './Button.styles';
import * as Haptics from 'expo-haptics';

type ButtonProps = {
  title: string;
  onPress: () => void;
  impact?: boolean | Haptics.ImpactFeedbackStyle;
} & PressableProps;

export function Button({ title, onPress, disabled = false, impact = true, ...otherProps }: ButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: !!disabled }}
      onPress={() => {
        if (disabled) return;
        if (impact && Platform.OS !== 'web') {
          Haptics.impactAsync(impact === true ? Haptics.ImpactFeedbackStyle.Light : impact);
        }
        onPress();
      }}
      {...otherProps}
      style={({ pressed }) => [styles.button, !disabled && styles.shadow, disabled && styles.disableBtn, pressed && { opacity: disabled ? 1 : 0.6 }]}>
      <Text style={[styles.buttonText, disabled && styles.disableTxt]}>{title}</Text>
    </Pressable>
  );
}

Button.displayName = 'Button';
