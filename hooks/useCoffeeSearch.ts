import { useEffect, useState } from "react";
import useFetchCoffees from "./useFetchCoffees";

const useCoffeeSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { coffeeList, isLoading, isError } = useFetchCoffees();
  const [filteredCoffeeData, setFilteredCoffeeData] = useState<ApiCoffeItem[]>([]);

  useEffect(() => {
    if (coffeeList) {
      const filteredData = coffeeList.filter((coffee: ApiCoffeItem) =>
        coffee.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCoffeeData(filteredData);
    }
    console.log("coffeelist: ", filteredCoffeeData);
    console.log("search: ", searchTerm);
    
  }, [searchTerm, coffeeList]);

  return { searchTerm, setSearchTerm, filteredCoffeeData, isLoading, isError };
};

export default useCoffeeSearch;
