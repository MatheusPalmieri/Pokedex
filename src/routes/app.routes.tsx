import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Welcome } from "../pages/Welcome";
import { Home } from "../pages/Home";
import { About } from "../pages/About";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Welcome Page */}
      <Stack.Screen name="Welcome" component={Welcome} />
      {/* Home Page */}
      <Stack.Screen name="Home" component={Home} />
      {/* About Page */}
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}
