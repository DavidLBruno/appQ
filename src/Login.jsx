import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import { Link } from "react-router-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.btn} underlayColor="#f0f4f7">
        <Text>Sign out</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
