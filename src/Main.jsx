import { View } from "react-native";
import Login from "./Login";
import { Route, Routes } from "react-router-native";
import { useFonts } from "expo-font";
import { useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import Home from "./Home";

const Main = () => {
  const [fontsLoaded] = useFonts({
    Roboto: require("../assets/fonts/Roboto/Roboto-Light.ttf"),
    RobotoBold: require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View onLayout={onLayout}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </View>
  );
};

export default Main;
