import { Text, StyleSheet } from "react-native";
import CustomButton from "../../components/custom-button";
import { router } from "expo-router";
import KeyboardAwareScrollView from "../../components/keyboard-aware-scroll-view";

export default function PaymentDetailsForm() {
  const onNext = () => {
    router.push("/checkout/confirm");
  };

  return (
    <KeyboardAwareScrollView>
      <Text>Payment</Text>
      <CustomButton onPress={onNext} title={"Next"} style={styles.button} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  button: {
    marginTop: "auto",
    marginBottom: 20,
  },
});
