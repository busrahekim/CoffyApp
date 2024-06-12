import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "@/constants/Endpoint";
import { useEffect, useState } from "react";

const useFetchCoffees = () => {
  const [filter, setFilter] = useState("hot");

  const {
    data: coffeeList,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["coffeData", filter],
    queryFn: () => fetch(`${baseUrl}/${filter}`).then((res) => res.json()),
    staleTime: 0, //to force refetching on every render
  });

  useEffect(() => {
    console.log("fetchFilter: ", filter);
    console.log("fetchList: ", coffeeList);
  }, [filter, coffeeList]);

  return { filter, setFilter, coffeeList, isLoading, isError };
};

export default useFetchCoffees;
