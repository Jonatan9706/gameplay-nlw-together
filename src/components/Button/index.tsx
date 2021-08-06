import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

type ButtonIconProps = RectButtonProps & {
  title: string
  outline?: boolean
  medium?: boolean
}

export function Button({ title, outline, medium, ...rest }: ButtonIconProps) {
  return (
    <RectButton
      style={[ medium ? styles.medium : styles.container]}
      { ...rest }
    >

      <Text style={styles.title}>
        { title }
      </Text>
    </RectButton>
  );
}