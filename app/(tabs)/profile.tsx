import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Profile = () => {
  const { top } = useSafeAreaInsets();
  return (
    <ScrollView
      className="bg-primary flex-1"
      contentContainerStyle={{
        paddingTop: top,
      }}
    >
      <Text>Profile</Text>
    </ScrollView>
  );
};

export default Profile;
