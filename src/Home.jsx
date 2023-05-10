import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProgressCircle from "./components/Circle";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>My Home Screen</Text>
      <ProgressCircle />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});

export default HomeScreen;
