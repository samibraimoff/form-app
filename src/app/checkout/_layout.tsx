import { Stack } from "expo-router";

const CheckoutLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"personal"} options={{ title: "Personal" }} />
      <Stack.Screen name={"payment"} options={{ title: "Payment" }} />
      <Stack.Screen name={"confirm"} options={{ title: "Confirm" }} />
    </Stack>
  );
};

export default CheckoutLayout;
