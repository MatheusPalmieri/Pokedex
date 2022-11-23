import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components";

import theme from "./src/global/styles/theme";

import { Home } from "./src/pages/Home";
import { Welcome } from "./src/pages/Welcome";
import { Routes } from "./src/routes";

export default function App() {


  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
