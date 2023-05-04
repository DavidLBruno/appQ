import { View, Text } from "react-native";
import Login from "./Login";
import { Route, Routes } from "react-router-native";

const Main = () => {
  return (
    <View>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </View>
  );
};

export default Main;
