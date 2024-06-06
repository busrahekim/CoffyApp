import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "@/constants/Endpoint";

const useFetchCoffees = () => {
  const {
    data: coffeeList,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["coffeData"],
    queryFn: () => fetch(`${baseUrl}/iced`).then((res) => res.json()),
    staleTime: Infinity,
  });

  return { coffeeList, isLoading, isError };
};

export default useFetchCoffees;
