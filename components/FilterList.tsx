import { ScrollView, Text, TouchableOpacity } from "react-native";
import { FilterItems } from "@/constants/DummyDatas";
import { useState } from "react";
import useFetchCoffees from "@/hooks/useFetchCoffees";
// import useCoffeeFilter from "@/hooks/useCoffeeFilter";

const FilterList = () => {
  const [activeFilterIndex, setActiveFilterIndex] = useState(0);
  // const { setFilter } = useCoffeeFilter();
  const { setFilter } = useFetchCoffees();

  const handleFilterClick = (index: number) => {
    setActiveFilterIndex(index);
    setFilter(FilterItems[index].key);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="gap-2 m-1"
    >
      {FilterItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          className={`flex justify-center items-center w-20 h-8 pt-1 rounded-xl  ${
            activeFilterIndex === index ? "bg-secondary" : "bg-textColorMuted"
          }`}
          onPress={() => handleFilterClick(index)}
        >
          <Text className="text-textColor font-sans">{item.value}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default FilterList;
