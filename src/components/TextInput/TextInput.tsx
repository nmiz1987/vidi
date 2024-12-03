import { useRef, useState } from 'react';
import { Button, InputAccessoryView, Platform, TextInput as RNTextInput, Text } from 'react-native';
import { TextInputProps } from './TextInput.interfaces';
import styles from './TextInput.styles';
import { Box } from '../Box/Box';
import { Spacer } from '../Spacer';

/**
 *
 * Notice the start and end icons - because the right and left are different in RTL, we need to handle them as start and end icons base of the writing direction.
 */

export function TextInput({ label, caption, startIcon, endIcon, onStartIconPress, onEndIconPress, isError, ...props }: TextInputProps) {
  const inputRef = useRef<RNTextInput>(null);
  const [isInputFocus, setIsInputFocus] = useState(false);

  return (
    <Box withoutFeedback onPress={() => inputRef.current?.focus()}>
      {label && (
        <Box>
          <Text>{label}</Text>
          <Spacer size={8} />
        </Box>
      )}
      {Platform.OS === 'ios' && (
        <InputAccessoryView nativeID="inputID">
          <Button title="Done" onPress={() => inputRef?.current?.blur()} />
        </InputAccessoryView>
      )}
      <Box style={[styles.container, isInputFocus && styles.focus, !isInputFocus && isError && styles.error]}>
        {startIcon && (
          <Box onPress={() => onStartIconPress?.()} withoutFeedback style={styles.startIcon}>
            {startIcon}
          </Box>
        )}
        <RNTextInput
          ref={inputRef}
          inputAccessoryViewID="inputID"
          style={[styles.input, props.style && props.style]}
          onFocus={() => setIsInputFocus(true)}
          onBlur={() => setIsInputFocus(false)}
          placeholderTextColor={styles.placeholderColor.color}
          {...props}
        />
        {endIcon && (
          <Box onPress={() => onEndIconPress?.()} withoutFeedback style={styles.endIcon}>
            {endIcon}
          </Box>
        )}
      </Box>
      {caption && <Text>{caption}</Text>}
    </Box>
  );
}
