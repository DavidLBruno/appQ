import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import loginService from "./Services/login.service";

const Login = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [dni, setDni] = useState("");
  const [loggin, setLoggin] = useState(false);
  const [validate, setvalidate] = useState(false);

  const onChangeText = (text, type) => {
    type === "dni" ? setDni(dni + text) : setPassword(password + text);
    validation();
  };

  const validation = () => {
    if (dni.length > 7 && password.length > 7) {
      setvalidate(true);
    } else {
      setvalidate(false);
    }
  };

  const login = () => {
    if (!validate) {
      setLoggin(true);
      setTimeout(() => {
        setLoggin(false);
        loginService(dni, password);
        setPassword("");
        setDni("");
        navigation.navigate("Home");
      }, 100);
    } else {
      alert("Debe completar los campos");
      return;
    }
  };

  return (
    <LinearGradient colors={["#990070", "white"]}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={require("../assets/logoUNR.png")}
            style={styles.logo}
          ></Image>
          {loggin && (
            <Image
              source={require("../assets/Rolling-1s-200px.gif")}
              style={styles.load}
            ></Image>
          )}
          <Text style={styles.title}>Ingresar al sistema</Text>
          <View style={styles.form}>
            <View>
              <Text>DNI</Text>
              <TextInput
                keyboardType="numeric"
                style={styles.textInput}
                onChangeText={(text) => onChangeText(text, "dni")}
              />
            </View>
            <View>
              <Text>Clave</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => onChangeText(text, "password")}
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
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  load: {
    position: "absolute",
    width: 24,
    height: 24,
    top: "50%",
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
    borderRadius: 10,
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
    borderRadius: 5,
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
