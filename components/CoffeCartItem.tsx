import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const CoffeCartItem = ({ item }: { item: CartItem }) => {
  return (
    <View className="flex flex-row border border-white p-4 items-center justify-between">
      <View className="flex flex-row gap-x-2">
        <Image
          source={{ uri: item.image }}
          alt="coffe-img"
          className="w-12 h-12 rounded object-cover "
        />
        <View>
          <Text className="text-textColor text-base">{item.title}</Text>
          <Text className="text-textColorMuted text-sm">
            {item.cupSize.title}
          </Text>
        </View>
      </View>

      <View className="flex flex-row items-center bg-white justify-between rounded w-24 h-8">
        <TouchableOpacity className="bg-slate-900 h-full items-center justify-center rounded-l w-8">
          <AntDesign name="minus" size={16} color="white" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold h-full">{item.quantity}</Text>
        <TouchableOpacity className="bg-slate-900 h-full items-center justify-center rounded-r w-8">
          <AntDesign name="plus" size={16} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CoffeCartItem;
