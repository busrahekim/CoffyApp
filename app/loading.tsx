import { View, ActivityIndicator } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const LoadingView = () => {
  return (
    <View className="flex-1 justify-center items-center bg-primary">
      <ActivityIndicator size="large" color={Colors.secondary} />
    </View>
  );
};

export default LoadingView;
