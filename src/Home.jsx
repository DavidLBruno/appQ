import { View, Text, StyleSheet } from "react-native";
import { Link } from "react-router-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Link to="/">
        <Text>Ir a Acerca de</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
