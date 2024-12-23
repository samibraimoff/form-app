import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

const PaymentDetailsForm = () => {
  const onNext = () => {
    router.push("/checkout/confirm");
  };

  return (
    <View style={styles.container}>
      <Text>Payment</Text>
      <CustomButton onPress={onNext} title={"Next"} style={styles.button} />
    </View>
  );
};

export default PaymentDetailsForm;

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
