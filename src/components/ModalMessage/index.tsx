import React, { ReactNode } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Modal,
  ModalProps
} from 'react-native';
import { Background } from '../Background';

import { styles } from './styles';

type Props = ModalProps & {
  children: ReactNode;
  closeModal?: () => void;
}

export function ModalMessage({
  children,
  closeModal,
  ...rest
}: Props) {
  return (
    <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      {...rest}
    >
      
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.bar} />
            {children}
          </Background>
        </View>
      </View>
    </Modal>
  );
}