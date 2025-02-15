import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../components/custom-button";
import { Link, router } from "expo-router";
import KeyboardAwareScrollView from "../../components/keyboard-aware-scroll-view";
import { useCheckoutForm } from "../../context/checkout-form/checkout-form-provider";

export default function Confirm() {
  const { paymentInfo, personalInfo, onSubmit } = useCheckoutForm();
  const onNext = () => {
    // validate
    // submit
    // redirect to home
    router.dismissAll();
    router.back();
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        {personalInfo && (
          <View style={styles.dataContainer}>
            <View style={styles.dataContainerHeader}>
              <Text style={styles.title}>Personal</Text>
              <Link
                href={"/checkout"}
                style={{ color: "#005055", fontWeight: "600" }}
              >
                Edit
              </Link>
            </View>
            {Object.entries(personalInfo).map(([key, value]) => (
              <Text key={key}>
                {key}: {value}
              </Text>
            ))}
          </View>
        )}
        {paymentInfo && (
          <View style={styles.dataContainer}>
            <View style={styles.dataContainerHeader}>
              <Text style={styles.title}>Payment</Text>
              <Link
                href={"/checkout/payment"}
                style={{ color: "#005055", fontWeight: "600" }}
              >
                Edit
              </Link>
            </View>
            {Object.entries(paymentInfo).map(([key, value]) => (
              <Text key={key}>
                {key}: {value.toString()}
              </Text>
            ))}
          </View>
        )}
      </View>
      <CustomButton onPress={onSubmit} title={"Submit"} style={styles.button} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: "auto",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 5,
    paddingBottom: 25,
    gap: 15,
  },
  dataContainer: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 10,
    borderRadius: 10,
    gap: 3,
  },
  dataContainerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
});
