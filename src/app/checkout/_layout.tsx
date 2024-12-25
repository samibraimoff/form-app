import { Stack } from "expo-router";
import CheckoutFormProvider from "../../context/checkout-form/checkout-form-provider";
import CheckoutFormStepIndicator from "../../components/checkout-form-step-indicator";

export default function CheckoutLayout() {
  return (
    <CheckoutFormProvider>
      <CheckoutFormStepIndicator />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"personal"} />
        <Stack.Screen name={"payment"} />
        <Stack.Screen name={"confirm"} />
      </Stack>
    </CheckoutFormProvider>
  );
}
