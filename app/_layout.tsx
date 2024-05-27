import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import Colors from "@/constants/Colors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Ionicons } from "@expo/vector-icons";

const queryClient = new QueryClient();

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const router = useRouter();
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="coffee-details"
        options={{
          title: "",
          // headerBackTitle: "",
          // headerShadowVisible: false,
          headerShown: false 
          // headerStyle: { backgroundColor: Colors.primary },
          // headerLeft: () => (
          //   <TouchableOpacity onPress={router.back}>
          //     <Ionicons
          //       name="arrow-back"
          //       size={34}
          //       color={Colors.textColorMuted}
          //     />
          //   </TouchableOpacity>
          // ),
          // headerRight: () => (
          //   <TouchableOpacity onPress={addFavoriteList}>
          //     <Ionicons
          //       name="heart"
          //       size={34}
          //       color={Colors.textColorMuted}
          //     />
          //   </TouchableOpacity>
          // ),
        }}
      />
    </Stack>
  );
};

const RootLayoutNav = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RootLayout />
    </QueryClientProvider>
  );
};

export default RootLayoutNav;
