import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useAuth } from "../../hooks/auth";
import { Avatar } from "../Avatar";
import { Message } from "../Message";
import { ModalMessage } from "../ModalMessage";
import { styles } from "./styles";

export function Profile() {
  const { user, signOut } = useAuth();
  const [openModalSignOut, setOpenModalSignOut] = useState<boolean>(false);

  function handleOpenModal() {
    setOpenModalSignOut(true);
  }

  function handleCloseModal() {
    setOpenModalSignOut(false);
  }

  function handleSignOut() {
    Alert.alert('Logout', 'Deseja sair do GamePlay?',
    [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: () => signOut(),
        style: 'default'
      }
    ]
    )
  }
  
  return (
    <>
      <View style={styles.container}>
        <RectButton onPress={handleOpenModal}>
          <Avatar urlImage={user.avatar} />
        </RectButton>

        <View>
          <View style={styles.user}>
            <Text style={styles.greeting}>
              Olá,
            </Text>

            <Text style={styles.username}>
              {user.firstName}
            </Text>
          </View>
          <Text style={styles.message}>
            Hoje é dia de vitoria
          </Text>
        </View>
      </View>
      <ModalMessage
        visible={openModalSignOut}
        closeModal={handleCloseModal}
      >
        <Message
          message="Deseja sair do Gameplay"
          options
          onPress={signOut}
          cancel={() => handleCloseModal()}
        />
        </ModalMessage>
    </>
  );
}