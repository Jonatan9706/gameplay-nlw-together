import React from 'react'
import { View, Text } from 'react-native'
import { Button } from '../Button';
import { styles } from './styles';

type Props = {
  message: string;
  cancel?: () => void;
  onPress?: () => void;
  options?: boolean;
}

export function Message({
  message,
  cancel,
  onPress,
  options
}: Props) {
  return (
    <View style={styles.content}>
      <Text style={styles.message}>{message}</Text>
      {options && (
        <View style={styles.footer}>
          <Button
            title="Não"
            medium
            onPress={cancel}
            style={styles.outline}
          />
          <Button
            title="Sim"
            medium
            onPress={onPress}
          />
      </View>
      )}
  </View>
  )
}
