import {
  StyleSheet,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const headerHeight = useHeaderHeight();
  const { top } = useSafeAreaInsets();
  return (
    <ScrollView
      className="bg-primary"
      contentContainerStyle={{
        paddingTop: headerHeight,
      }}
    >
      <View className="bg-red-500 m-20">
        <Text>SASASA</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
