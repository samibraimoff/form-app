import RNPickerSelect from "react-native-picker-select";
import { ComponentProps } from "react";
import { Text, View } from "react-native";
import { useController } from "react-hook-form";

type CustomPickerSelectProps = {
  name: string;
  label: string;
} & Omit<ComponentProps<typeof RNPickerSelect>, "onValueChange">;

export default function CustomPickerSelect({
  name,
  label,
  ...pickerSelectProps
}: CustomPickerSelectProps) {
  const {
    field: { value, onBlur, onChange },
    fieldState: { error },
  } = useController({ name, rules: { required: `${name} is required` } });
  return (
    <View style={{ marginTop: 4, marginBottom: 4 }}>
      {label && (
        <Text style={{ fontWeight: 600, color: "dimgray" }}>{label}</Text>
      )}
      <RNPickerSelect
        {...pickerSelectProps}
        value={value}
        onValueChange={onChange}
        onClose={onBlur}
        style={{
          viewContainer: {
            marginTop: 4,
            marginBottom: 2,
          },
          inputIOS: {
            borderColor: error ? "crimson" : "gainsboro",
            borderWidth: 1,
            width: "100%",
            padding: 10,
            borderRadius: 5,
            pointerEvents: "none",
          },
        }}
      />
      {error && (
        <Text style={{ color: "crimson", height: 17 }}>{error.message}</Text>
      )}
    </View>
  );
}
