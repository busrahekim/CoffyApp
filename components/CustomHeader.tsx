import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";

const CustomHeader = () => {
  const { top } = useSafeAreaInsets();

  return (
    <BlurView intensity={80} tint={"extraLight"} style={{ paddingTop: top }}>
      <View className="flex flex-row items-center justify-around h-14 gap-2 px-5 bg-transparent">
        <Link
          href={"/(authenticated)/(modals)/account" as `${string}:${string}`}
          asChild
        >
          <TouchableOpacity className="rounded-full bg-[#626D77] w-10 h-10 justify-center items-center">
            <Text className="text-white font-medium text-lg">BH</Text>
          </TouchableOpacity>
        </Link>

        <View className="flex-1 flex-row justify-center items-center rounded-full bg-secondary">
          <Ionicons
            className="p-2"
            name="search"
            size={20}
            color={Colors.textColor}
          />
          <TextInput
            className="flex-1 p-2 pl-0 bg-textColor text-textColorMuted rounded-full"
            placeholder="Search"
            placeholderTextColor={Colors.textColor}
          />
        </View>
        <View className="rounded-full bg-[#D8DCE2] w-10 h-10 justify-center items-center">
          <Ionicons name={"stats-chart"} size={20} color={Colors.textColor} />
        </View>
        <View className="rounded-full bg-[#D8DCE2] w-10 h-10 justify-center items-center">
          <Ionicons name={"card"} size={20} color={Colors.textColor} />
        </View>
      </View>
    </BlurView>
  );
};

export default CustomHeader;
