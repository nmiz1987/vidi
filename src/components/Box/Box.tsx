import { forwardRef } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { BoxProps } from './Box.interfaces';

export const Box = forwardRef((props: BoxProps, ref: any): JSX.Element => {
  const { children, onPress, withoutFeedback, style, scroll, horizontal, activeOpacity, ...otherProps } = props;

  const ViewBox = (
    <View testID="view" ref={props.ref} style={style} {...otherProps}>
      {children}
    </View>
  );
  const ScrollBox = (
    <ScrollView testID="scroll-view" ref={ref} style={style} {...otherProps}>
      {props.children}
    </ScrollView>
  );

  const PressBox = (
    <Pressable testID="pressable" ref={props.ref} style={style} onPress={props.onPress} {...props}>
      {props.children}
    </Pressable>
  );

  const TouchBox = (
    <Pressable
      testID="pressable-without-feedback"
      ref={props.ref}
      style={({ pressed }) => [style, pressed && { opacity: activeOpacity ?? 0.2 }]}
      onPress={props.onPress}
      {...props}>
      {props.children}
    </Pressable>
  );

  if (props?.onPress) {
    if (props?.withoutFeedback) return PressBox;
    return TouchBox;
  } else {
    if (props?.scroll) return ScrollBox;
    return ViewBox;
  }
});

Box.displayName = 'Box';
