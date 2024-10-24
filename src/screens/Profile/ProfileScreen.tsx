import React from "react";
import { Pressable, Text, View } from "react-native";
import { GlobalStyles } from "../../theme";
import { useProfileStore } from "../../store/profile-store";

export const ProfileScreen = () => {
  const name = useProfileStore((state) => state.name);
  const email = useProfileStore((state) => state.email);
  const changeProfile = useProfileStore((state) => state.changeProfile);

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>{name}</Text>
      <Text style={GlobalStyles.title}>{email}</Text>

      <Pressable 
          onPress={() => useProfileStore.setState({ name: 'Juan Camilo' })}
          style={ GlobalStyles.primaryButton}>
        <Text>Cambiar Nombre</Text>
      </Pressable>

      <Pressable 
          onPress={() => useProfileStore.setState({ email: 'juancamilomendozavillegas14@gmail.com' })}
          style={ GlobalStyles.primaryButton}>
        <Text>Cambiar email</Text>
      </Pressable>


      <Pressable 
          onPress={() => changeProfile('jhon doe', 'example@gmail.com')}
          style={ GlobalStyles.primaryButton}>
        <Text>regresar al anterior</Text>
      </Pressable>
    </View>
  );
};
