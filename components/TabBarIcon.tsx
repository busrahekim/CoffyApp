import useStore from "@/store/cartStore";
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
  const cartItemsLength = useStore((state) => state.cartItems.length);
  return (
    <View className="items-center gap-3">
      {isCart ? (
        <View className="relative">
          <View className="rounded-xl bg-secondary px-4 py-1 items-center justify-center">
            <Ionicons
              size={25}
              style={[{ marginBottom: 0 }, style]}
              {...rest}
            />
          </View>
          {cartItemsLength > 0 && (
            <View className="absolute top-[-5px] right-[-5px] bg-slate-900 rounded-full min-w-[18px] h-5 justify-center items-center">
              <Text style={{ color: "white", fontSize: 12 }}>
                {cartItemsLength}
              </Text>
            </View>
          )}
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
