import Login from "./Login";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Home";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (!fontsLoaded) {
      loadFont();
    }
  });

  const loadFont = async () => {
    await Font.loadAsync({
      Roboto: require("../assets/fonts/Roboto/Roboto-Light.ttf"),
      RobotoBold: require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
    });
    setFontsLoaded(true);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
