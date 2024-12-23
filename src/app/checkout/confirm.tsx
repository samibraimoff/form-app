import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

const Confirm = () => {
  const onNext = () => {
    // validate
    // submit
    // redirect to home
    router.dismissAll();
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text>Confirm submission</Text>
      <CustomButton onPress={onNext} title={"Submit"} style={styles.button} />
    </View>
  );
};

export default Confirm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    padding: 10,
  },
  button: {
    marginTop: "auto",
    marginBottom: 20,
  },
});
