import { ScrollViewProps, TouchableOpacityProps, ViewStyle } from 'react-native';

export type BoxProps = TouchableOpacityProps &
  ScrollViewProps & {
    scroll?: boolean;
    horizontal?: boolean;
    ref?: any;
    withoutFeedback?: boolean;
    contentContainerStyle?: ViewStyle;
  };
