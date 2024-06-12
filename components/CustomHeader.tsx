import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import useCoffeeSearch from "@/hooks/useCoffeeSearch";

const CustomHeader = () => {
  const router = useRouter();
  const { top } = useSafeAreaInsets();
  const { setSearchTerm, searchTerm } = useCoffeeSearch();
  const toggleProfile = () => {
    router.replace("/(tabs)/profile");
  };

  return (
    <BlurView intensity={0} tint={"extraLight"} style={{ paddingTop: top * 2 }}>
      <View className="flex flex-row items-center justify-between gap-2 px-5 bg-transparent">
        <View className="w-52">
          <Text className="text-textColor text-3xl truncate font-semibold font-sans">
            Find the best coffee for you
          </Text>
        </View>
        <TouchableOpacity
          className="rounded-xl bg-[#626D77] w-10 h-10 justify-center items-center"
          onPress={toggleProfile}
        >
          <Text className="text-white font-medium text-lg">BH</Text>
        </TouchableOpacity>
      </View>
      <View className="mx-4 flex-1 mt-5">
        <View className="flex-row justify-center items-center rounded-xl bg-textColorMuted px-2 gap-x-2">
          <Ionicons
            className="p-2"
            name="search"
            size={20}
            color={Colors.textColor}
          />
          <TextInput
            className="flex-1 p-2 pl-0 bg-textColorMuted text-textColor rounded-full"
            placeholder="Search"
            placeholderTextColor={Colors.textColor}
            onChangeText={setSearchTerm}
            value={searchTerm}
          />
        </View>
      </View>
    </BlurView>
  );
};

export default CustomHeader;
