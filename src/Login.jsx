import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
  TextInput,
} from "react-native";
import { useHistory } from "react-router-native";

const Login = () => {
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [dni, setDni] = useState("");

  const validation = () => {};

  const login = () => {
    history.push("/other-page");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/login/login-bg.jpg")}
        style={styles.backgroundImage}
      ></Image>
      <View style={styles.card}>
        <Image
          source={require("../assets/logoUNR.png")}
          style={styles.logo}
        ></Image>
        <Text style={styles.title}>Ingresar al sistema</Text>
        <View style={styles.form}>
          <View>
            <Text>DNI</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setDni(text)}
              keyboardType="email-address"
            />
          </View>
          <View>
            <Text>Clave</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
          </View>
          <TouchableHighlight style={styles.btn} onPress={login}>
            <View style={styles.btn_container}>
              <Image
                source={require("../assets/login/signin.png")}
                style={styles.logo_btn}
              />
              <Text style={styles.btnText}>INGRESAR</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  title: {
    fontSize: 20.5,
    fontFamily: "RobotoBold",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    height: 470,
    width: 332,
    backgroundColor: "white",
    borderTopColor: "#006187",
    borderTopWidth: 5,
  },
  form: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  logo: {
    height: 63,
    width: 63,
  },
  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#990070",
    width: 152,
    height: 56,
    color: "white",
  },
  btn_container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  logo_btn: {
    height: 16,
    width: 16,
  },
  btnText: {
    display: "flex",
    color: "white",
    fontFamily: "Roboto",
  },
  textInput: {
    height: 36,
    width: 240,
    borderBottomColor: "#ced4da",
    borderBottomWidth: 1,
  },
});

export default Login;
