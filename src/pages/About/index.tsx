import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Text } from "react-native";

type RouteParams = {
  pokemonId: number;
};

export function About() {
  const route = useRoute();
  const { pokemonId } = route.params as RouteParams;

  return (
    <Text style={{ fontSize: 40, color: "black", marginTop: 50 }}>
      {pokemonId}
    </Text>
  );
}
