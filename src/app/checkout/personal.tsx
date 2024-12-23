import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

const PersonalDetailsForm = () => {
  const onNext = () => {
    router.push("/checkout/payment");
  };

  return (
    <View style={styles.container}>
      <Text>Personal</Text>
      <CustomButton onPress={onNext} title={"Next"} style={styles.button} />
    </View>
  );
};

export default PersonalDetailsForm;

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
