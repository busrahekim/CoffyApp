import { View, Text } from "react-native";
import React from "react";

const ErrorView = () => {
  return (
    <View className="flex-1 justify-center items-center bg-primary">
      <Text className="font-sans text-xl text-textColor">
        Something went wrong
      </Text>
    </View>
  );
};

export default ErrorView;
