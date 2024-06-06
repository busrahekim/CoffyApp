import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import FilterList from "@/components/FilterList";
import CoffeeCard from "@/components/CoffeeCard";
import { useState } from "react";
import LoadingView from "../loading";
import ErrorView from "../error";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import useDebounce from "@/hooks/useDebounce";
import useCoffeeSearch from "@/hooks/useCoffeeSearch";

const HomeScreen = () => {
  const headerHeight = useHeaderHeight();
  const [activeTextFilter, setActiveTextFilter] = useState("Recommended");
  const debouncedSearch = useDebounce(activeTextFilter);

  const handleFilterClick = (filter: string) => {
    setActiveTextFilter(filter);
  };

  const { filteredCoffeeData, isLoading, isError } =
    useCoffeeSearch();

  if (isLoading) {
    return <LoadingView />;
  }

  if (isError) {
    return <ErrorView />;
  }

  return (
    <ScrollView
      className="bg-primary "
      style={{
        paddingTop: headerHeight,
      }}
    >
      <FilterList />
      <View className="flex flex-row justify-between items-center mx-4 mt-4">
        <TouchableOpacity onPress={() => handleFilterClick("Recommended")}>
          <Text
            className={`font-sans ${
              activeTextFilter === "Recommended"
                ? "text-textColor"
                : "text-textColorMuted"
            }`}
          >
            Recommended
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFilterClick("See all")}>
          <Text
            className={`font-sans ${
              activeTextFilter === "See all"
                ? "text-textColor"
                : "text-textColorMuted"
            }`}
          >
            See all
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {filteredCoffeeData.map((coffee: ApiCoffeItem, index: number) => (
          <CoffeeCard item={coffee} key={index} />
        ))}
      </ScrollView>

      <View className="bg-slate-900 flex flex-row justify-between items-center mt-5 mx-2 rounded-md p-2">
        <Text className="text-textColor font-sans">Rate the app</Text>
        <View className="flex flex-row gap-1">
          <Ionicons
            name="star-outline"
            size={20}
            color={Colors.textColor}
            className="text-textColor font-sans"
          />
          <Ionicons
            name="star-outline"
            size={20}
            color={Colors.textColor}
            className="text-textColor font-sans"
          />
          <Ionicons
            name="star-outline"
            size={20}
            color={Colors.textColor}
            className="text-textColor font-sans"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
