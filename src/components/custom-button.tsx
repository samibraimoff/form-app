import { Pressable, Text, StyleSheet, View } from "react-native";
import { ComponentProps, ReactNode } from "react";

export interface CustomButtonProps extends ComponentProps<typeof Pressable> {
  title: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const CustomButton = ({
  title,
  leftIcon,
  rightIcon,
  ...pressableProps
}: CustomButtonProps) => {
  return (
    <Pressable {...pressableProps} style={styles.buttonContainer}>
      {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
      <Text style={styles.title}>{title}</Text>
      {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#005055",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 14,
  },
  rightIcon: {
    position: "absolute",
    right: 20,
  },
  leftIcon: {
    position: "absolute",
    left: 20,
  },
});
