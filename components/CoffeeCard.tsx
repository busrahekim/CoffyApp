import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import useStore from "@/store/cartStore";
import { useRouter } from "expo-router";

const CoffeeCard = ({ item }: { item: ApiCoffeItem }) => {
  const router = useRouter();
  const addItemToCart = useStore((state: any) => state.addItemToCart);
  const rating = (Math.random() * 4.2 + 1).toFixed(1);
  const price = (item.id * Math.random()).toFixed(2);

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

  // const cartItems = useStore((state) => state.cartItems);
  // Log the cartItems to the console
  // console.log("Cart Items:", cartItems);

  return (
    <TouchableOpacity
      className="w-44 rounded-xl bg-slate-900 m-2"
      onPress={navigateToDetails}
    >
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

      <View className="p-2 flex flex-col">
        <Text className="font-sans font-semibold text-lg text-textColor">
          {item.title}
        </Text>
        {/* <FlatList
          data={item.ingredients}
          renderItem={({ item: ingredient }) => (
            <View className="flex flex-row">
              <Text className="text-textColorMuted text-sm">{ingredient}</Text>
            </View>
          )}
          keyExtractor={(ingredient, index) => index.toString()}
          horizontal={true}

        ></FlatList> */}

        <Text className="text-textColorMuted text-sm">
          {item.ingredients[0]}
        </Text>

        <View className="flex flex-row justify-between items-center mb-[-15px] mt-2">
          <View className="flex flex-row items-center gap-1">
            <Text className="font-bold text-secondary font-sans">$</Text>
            <Text className="font-semibold text-textColor font-sans text-xl">
              {price}
            </Text>
          </View>
          <TouchableOpacity
            className="bg-secondary rounded-md items-center justify-center"
            onPress={() => addItemToCart(item)}
          >
            <Ionicons name="add" size={24} color={Colors.textColor} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CoffeeCard;
