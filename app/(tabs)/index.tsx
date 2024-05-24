import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import FilterList from "@/components/FilterList";
import CoffeCard from "@/components/CoffeCard";
import { useState } from "react";
import { CoffeItems } from "@/constants/DummyDatas";
import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "@/constants/Endpoint";
import LoadingView from "../loading";
import ErrorView from "../error";

const HomeScreen = () => {
  const headerHeight = useHeaderHeight();
  const [activeTextFilter, setActiveTextFilter] = useState("Recommended");

  const handleFilterClick = (filter: string) => {
    setActiveTextFilter(filter);
  };

  const {
    data: coffeeList,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["coffeData"],
    queryFn: () => fetch(`${baseUrl}/hot`).then((res) => res.json()),
    staleTime: Infinity, // Data never goes stale
  });

  if (isLoading) {
    return <LoadingView />;
  }

  if (isError) {
    return <ErrorView />;
  }

  return (
    <ScrollView
      className="bg-primary"
      contentContainerStyle={{
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
        {/* {CoffeItems.map((coffee, index) => (
          <CoffeCard item={coffee} key={index} />
        ))} */}
        {coffeeList.map((coffee: ApiCoffeItem, index: number) => (
          <CoffeCard item={coffee} key={index} />
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default HomeScreen;
