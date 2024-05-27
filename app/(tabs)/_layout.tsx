import React from "react";
import { Tabs } from "expo-router";
import { BlurView } from "expo-blur";
import Colors from "@/constants/Colors";
import { TabBarIcon } from "@/components/TabBarIcon";
import CustomHeader from "@/components/CustomHeader";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.textColor,
        tabBarBackground: () => (
          <BlurView className="flex-1 bg-primary" intensity={0} />
        ),
        tabBarStyle: {
          backgroundColor: "transparent",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="home"
              focused={focused}
              color={focused ? Colors.textColor : Colors.textColorMuted}
            />
          ),
          headerTransparent: true,
          header: () => <CustomHeader />,
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="cart"
              focused={focused}
              color={Colors.textColor}
              isCart
            />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="notification"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="notifications"
              focused={focused}
              color={focused ? Colors.textColor : Colors.textColorMuted}
            />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="person"
              focused={focused}
              color={focused ? Colors.textColor : Colors.textColorMuted}
            />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
