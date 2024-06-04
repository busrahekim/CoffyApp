import { View, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useStore from "@/store/cartStore";
import CoffeCartItem from "@/components/CoffeCartItem";

const Cart = () => {
  const { top } = useSafeAreaInsets();
  const cartItems = useStore((state) => state.cartItems);

  return (
    <SafeAreaView
      className="bg-primary flex-1"
      style={{
        paddingTop: top,
      }}
    >
      <Text className="uppercase font-bold text-3xl p-4">cart</Text>
      {cartItems.length > 0 ? (
        <View className="border-white border m-3 p-3 rounded">
          <FlatList
            data={cartItems}
            renderItem={(item) => <CoffeCartItem item={item.item} />}
            keyExtractor={(_, index) => index.toString()}
            horizontal={false}
          ></FlatList>
        </View>
      ) : (
        <View className="flex-1 items-center justify-center">
          <Text className="text-textColor text-3xl font-bold">
            Nothing added
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Cart;
