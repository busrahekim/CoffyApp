import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import useStore from "@/store/cartStore";
import { useRouter } from "expo-router";

const CoffeeCard = ({ item }: { item: ApiCoffeItem }) => {
  const router = useRouter();
  const addItemToCart = useStore((state: any) => state.addItemToCart);
  const rating = 4.2;
  const price = 2.05;

  const navigateToDetails = () => {
    router.push({
      pathname: "/coffee-details",
      params: {
        id: item.id,
        image: item.image,
        title: item.title,
        description: item.description,
        ingredients: item.ingredients,
        rating: rating,
        price: price,
      },
    });
  };

  const toggleAddCart = () => {
    const cartItem: CartItem = {
      id: item.id,
      image: item.image!,
      title: item.title!,
      price: price!,
      cupSize: { title: "S", sizePrice: 1 },
      quantity: 1,
    };

    addItemToCart(cartItem);
  };

  return (
    <TouchableOpacity
      className="rounded-xl bg-slate-900 m-2 w-44 "
      onPress={navigateToDetails}
    >
      <View>
        <View className="relative">
          <Image
            source={{ uri: item.image }}
            alt="coffe-img"
            className="w-full h-44 rounded-t-xl object-cover "
          />
          <View className="absolute top-2 right-2 bg-secondary rounded-full px-2 py-1 flex flex-row items-center">
            <Ionicons
              name="star"
              color={Colors.textColor}
              style={{ marginRight: 3 }}
            />
            <Text className="text-textColor font-bold">{rating}</Text>
          </View>
        </View>

        <View className="p-2">
          <Text className="font-sans font-semibold text-lg text-textColor">
            {item.title}
          </Text>

          <Text className="text-textColorMuted text-sm">
            {item.ingredients[0]}
          </Text>

          <View className="flex flex-row justify-between items-center mt-2">
            <View className="flex flex-row items-center gap-1">
              <Text className="font-bold text-secondary font-sans">$</Text>
              <Text className="font-semibold text-textColor font-sans text-xl">
                {price}
              </Text>
            </View>
            <TouchableOpacity
              className="bg-secondary rounded-md items-center justify-center"
              onPress={toggleAddCart}
            >
              <Ionicons name="add" size={24} color={Colors.textColor} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CoffeeCard;
