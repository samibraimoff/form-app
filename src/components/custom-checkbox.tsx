import { Text, View } from "react-native";
import Checkbox from "expo-checkbox";
import { useController } from "react-hook-form";

type CustomCheckboxProps = {
  label: string;
  name: string;
};

export default function CustomCheckbox({ name, label }: CustomCheckboxProps) {
  const {
    field: { value, onChange },
  } = useController({ name });

  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }}
    >
      <Checkbox value={value} onValueChange={onChange} />
      <Text style={{ fontSize: 16, fontWeight: 500, marginLeft: 5 }}>
        {label}
      </Text>
    </View>
  );
}
