import { Box } from './Box/Box';
import { StyleSheet } from 'react-native';

export interface SpacerProps {
  size?: number;
  isVertical?: boolean;
}

export function Spacer({ size = 16, isVertical = true }: SpacerProps) {
  const styles = createStyle(size, isVertical);

  return <Box style={styles.container} />;
}

export const createStyle = (size: number, isVertical: boolean) => {
  return StyleSheet.create({
    container: {
      ...(isVertical ? { marginTop: size, width: '100%' } : { height: '100%', marginStart: size }),
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
