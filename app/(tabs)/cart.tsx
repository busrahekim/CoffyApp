import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Cart = () => {
  const { top } = useSafeAreaInsets();
  return (
    <ScrollView
      className="bg-primary flex-1"
      contentContainerStyle={{
        paddingTop: top,
      }}
    >
      <Text>Cart</Text>
    </ScrollView>
  );
};

export default Cart;
