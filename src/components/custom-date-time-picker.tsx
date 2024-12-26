import { Text, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState } from "react";
import { useController } from "react-hook-form";

type CustomDateTimePickerProps = {
  name: string;
};

export default function CustomDateTimePicker({
  name,
}: CustomDateTimePickerProps) {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name });
  const [dateTimeIsVisible, setDateTimeIsVisible] = useState(false);
  const showDatePicker = () => {
    setDateTimeIsVisible(true);
  };

  const hideDatePicker = () => {
    setDateTimeIsVisible(false);
  };

  const handleConfirm = (date: Date) => {
    onChange(date);
    hideDatePicker();
  };
  return (
    <View>
      <Text
        style={{
          borderWidth: 1,
          borderColor: "gainsboro",
          padding: 10,
          borderRadius: 5,

          marginTop: 4,
          marginBottom: 2,
          color: "black",
        }}
        onPress={showDatePicker}
      >
        {value?.toLocaleDateString() || "Select a date"}
      </Text>
      <DateTimePickerModal
        isVisible={dateTimeIsVisible}
        mode="date"
        onCancel={() => setDateTimeIsVisible(false)}
        onConfirm={handleConfirm}
      />
      {error && (
        <Text style={{ color: "crimson" }} numberOfLines={1}>
          {error?.message}
        </Text>
      )}
    </View>
  );
}
