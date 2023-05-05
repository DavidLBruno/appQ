import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
  TextInput,
} from "react-native";

const Login = () => {
  const [text, setText] = useState("");

  const handleTextChange = (inputText) => {
    setText(inputText);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/login/login-bg.jpg")}
        style={styles.backgroundImage}
      ></Image>
      <View style={styles.card}>
        <Text>DNI</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={handleTextChange}
          value={text}
          placeholder=""
        />
        <Text>Clave</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={handleTextChange}
          value={text}
          placeholder=""
        />
        <TouchableHighlight style={styles.btn}>
          <Text style={styles.btnText}>Ingresar</Text>
        </TouchableHighlight>
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
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: 470,
    width: 332,
    backgroundColor: "white",
    borderTopColor: "#006187",
    borderTopWidth: 5,
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
  btnText: {
    color: "white",
  },
});

export default Login;
