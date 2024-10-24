import React from "react";
import { Text, View } from "react-native";
import { GlobalStyles } from "../../theme";
import { useProfileStore } from "../../store/profile-store";
import { useCounterStore } from "../../store/counter-store";

export const HomeScreen = () => {
  const name = useProfileStore((state) => state.name);
  const email = useProfileStore((state) => state.email);
  const counter = useCounterStore((state) => state.count);

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>{name}</Text>
      <Text style={GlobalStyles.title}>{email}</Text>
      <Text style={GlobalStyles.title}>Counter: {counter}</Text>
    </View>
  );
};
