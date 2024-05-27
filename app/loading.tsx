import { View, ActivityIndicator } from "react-native";
import React, { useRef } from "react";
import Colors from "@/constants/Colors";
import LottieView from "lottie-react-native";

const LoadingView = () => {
  const animation = useRef(null);
  return (
    <View className="flex-1 justify-center items-center bg-primary">
      {/* <ActivityIndicator size="large" color={Colors.secondary} /> */}
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
        }}
        source={require("../lottie/coffee.json")}
      />
    </View>
  );
};

export default LoadingView;
