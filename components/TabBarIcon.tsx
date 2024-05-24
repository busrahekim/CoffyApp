import Ionicons from "@expo/vector-icons/Ionicons";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { type ComponentProps } from "react";
import { View, Text } from "react-native";

interface TabBarIconProps
  extends IconProps<ComponentProps<typeof Ionicons>["name"]> {
  focused: boolean;
  isCart?: boolean;
}

export function TabBarIcon({
  focused,
  isCart,
  style,
  ...rest
}: TabBarIconProps) {
  return (
    <View className="items-center gap-3">
      {isCart ? (
        <View className="rounded-xl bg-secondary px-4 py-1 items-center justify-center">
          <Ionicons size={25} style={[{ marginBottom: 0 }, style]} {...rest} />
        </View>
      ) : (
        <Ionicons size={25} style={[{ marginBottom: -3 }, style]} {...rest} />
      )}
      {focused && (
        <View
          className="w-1 h-1 rounded-full"
          style={{ backgroundColor: rest.color }}
        />
      )}
    </View>
  );
}
