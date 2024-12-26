import { StyleSheet, View } from "react-native";
import CustomButton from "../../components/custom-button";
import CustomTextInput from "../../components/custom-text-input";
import { router } from "expo-router";
import KeyboardAwareScrollView from "../../components/keyboard-aware-scroll-view";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  PaymentInfo,
  PaymentInfoSchema,
  useCheckoutForm,
} from "../../context/checkout-form/checkout-form-provider";
import CustomCheckbox from "../../components/custom-checkbox";

export default function PaymentDetailsForm() {
  const { paymentInfo, setPaymentInfo } = useCheckoutForm();
  const methods = useForm<PaymentInfo>({
    resolver: zodResolver(PaymentInfoSchema),
    defaultValues: paymentInfo,
  });
  const onNext: SubmitHandler<PaymentInfo> = (data) => {
    setPaymentInfo(data);
    router.push("/checkout/confirm");
  };

  return (
    <KeyboardAwareScrollView>
      <FormProvider {...methods}>
        <CustomTextInput
          name="cardNumber"
          label={"Card number"}
          placeholder={"1111 2222 3333 4444"}
        />
        <View style={{ flexDirection: "row", gap: 5 }}>
          <CustomTextInput
            name="expiry"
            label={"Expiration date"}
            placeholder={"MM / YY"}
            containerStyle={{ flex: 1 }}
          />
          <CustomTextInput
            name="cvv"
            label={"Secure code"}
            placeholder={"1234"}
            containerStyle={{ flex: 1 }}
            inputMode="numeric"
          />
        </View>
        <CustomCheckbox label="Save Card" name="saveCard" />
        <CustomButton
          onPress={methods.handleSubmit(onNext)}
          title={"Next"}
          style={styles.button}
        />
      </FormProvider>
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
  },
});
