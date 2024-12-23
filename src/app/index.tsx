import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link, Stack } from "expo-router";
import CustomButton from "../components/CustomButton";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Home" }} />
      <Text style={styles.text}>Home</Text>
      <Link href={"/checkout"} asChild>
        <CustomButton title={"Next"} />
      </Link>
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
  },
});
