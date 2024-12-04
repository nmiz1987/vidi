import { ScrollView, ScrollViewProps, StyleSheet, ViewProps } from 'react-native';
import { remapProps } from 'nativewind';

export type ScreenWithScrollProps = ViewProps & {
  className?: string;
  contentContainerClassName?: string;
  style?: ViewProps['style'];
  contentContainerStyle?: ScrollViewProps['style'];
  noPadding?: boolean;
};

const ScreenWithScrollTmp = (props: ScreenWithScrollProps) => {
  const { style, children, noPadding, contentContainerStyle, ...otherProps } = props;

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={[styles.scrollView, style]}
      contentContainerStyle={[styles.scrollViewContentContainer, noPadding ? { padding: 0 } : {}, contentContainerStyle]}
      {...otherProps}>
      {children}
    </ScrollView>
  );
};

ScreenWithScrollTmp.displayName = 'ScreenWithScroll';

export const ScreenWithScroll = remapProps(ScreenWithScrollTmp, {
  className: 'style',
  contentContainerClassName: 'contentContainerStyle',
});

const styles = StyleSheet.create({
  // placeholder for feature options
  scrollView: {},
  scrollViewContentContainer: {
    padding: 16,
    minHeight: '100%',
  },
});
