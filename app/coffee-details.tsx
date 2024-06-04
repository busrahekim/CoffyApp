import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useLocalSearchParams, useRouter } from "expo-router";
import useStore from "@/store/cartStore";
import { Cups } from "@/constants/DummyDatas";

const CoffeeDetails = () => {
  const { id, image, title, description, ingredients, rating, price } =
    useLocalSearchParams<{
      id: any;
      image: string;
      title: string;
      description: string;
      ingredients: string[];
      rating: any;
      price: any;
    }>();

  const item: ApiCoffeItem = {
    id: parseInt(id, 10),
    image: image!,
    title: title!,
    description: description!,
    ingredients: ingredients!,
    rating: rating!,
    price: price!,
  };

  const router = useRouter();
  const [isFavourited, setIsFavourited] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [activeSize, setActiveSize] = useState<CupSize>({
    title: "S",
    sizePrice: 1,
  });

  const addItemToCart = useStore((state: any) => state.addItemToCart);
  const favorites = useStore((state) => state.favorites);
  const addItemToFavorites = useStore(
    (state: { addItemToFavorites: any }) => state.addItemToFavorites
  );
  const removeItemFromFavorites = useStore(
    (state: { removeItemFromFavorites: any }) => state.removeItemFromFavorites
  );

  useEffect(() => {
    setIsFavourited(
      favorites.some((favoritedItem) => favoritedItem.id === item.id)
    );
  }, [favorites, item.id]);

  const toggleFavorite = () => {
    if (isFavourited) {
      removeItemFromFavorites(item.id);
    } else {
      addItemToFavorites(item);
    }
    setIsFavourited(!isFavourited);
  };

  const toggleAddCart = () => {
    const cartItem: CartItem = {
      id: parseInt(id, 10),
      image: image!,
      title: title!,
      price: price!,
      cupSize: activeSize,
      quantity: 1,
    };

    addItemToCart(cartItem);
    setIsAdded(true);
  };

  const handleSizeClick = (cup: CupSize) => {
    setActiveSize(cup);
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-900">
      <View className="relative">
        <Image
          source={{ uri: image }}
          alt="coffe-img"
          className="w-full h-96 object-cover"
        />

        <TouchableOpacity
          className="absolute top-12 right-4 rounded-md p-2"
          style={{ backgroundColor: "rgba(51, 60, 75, 0.5)" }}
          onPress={toggleFavorite}
        >
          <Ionicons
            name={isFavourited ? "heart" : "heart-outline"}
            color={Colors.textColor}
            size={30}
          />
        </TouchableOpacity>

        <TouchableOpacity
          className="absolute top-12 left-4 rounded-md p-2"
          style={{ backgroundColor: "rgba(51, 60, 75, 0.5)" }}
          onPress={router.back}
        >
          <Ionicons
            name="arrow-back-outline"
            color={Colors.textColor}
            size={30}
          />
        </TouchableOpacity>
        <View
          className="absolute bottom-0 left-0 rounded-t-md p-2 w-full"
          style={{ backgroundColor: "rgba(51, 60, 75, 0.5)" }}
        >
          <View className="flex flex-row justify-between">
            <Text className="text-textColor font-sans text-xl">{title}</Text>
            <View className="bg-secondary rounded-full px-2 py-1 flex flex-row items-center">
              <Ionicons
                name="star"
                color={Colors.textColor}
                style={{ marginRight: 3 }}
              />
              <Text className="text-textColor font-bold">{rating}</Text>
            </View>
          </View>
          <View className="rounded-md bg-slate-900 justify-center items-center p-1 mt-2">
            <Text className="text-textColorMuted font-sans text-sm">
              {ingredients!}
            </Text>
          </View>
        </View>
      </View>
      <View className="flex-1 p-3 mt-3 space-y-12">
        <View className="gap-2">
          <Text className="text-textColor font-sans text-xl">Description</Text>
          <Text className="text-textColor font-sans text-sm">
            {description}
          </Text>
        </View>

        <View>
          <Text className="text-textColor font-sans text-xl">Size</Text>
          <View className="flex flex-row justify-between gap-x-3 mt-2">
            {Cups.map((cup, index) => (
              <TouchableOpacity
                key={index}
                className={`rounded-xl justify-center items-center w-20 flex-1 border ${
                  activeSize.title === cup.title
                    ? "border-secondary"
                    : "border-primary"
                }`}
                style={{ backgroundColor: "rgba(51, 60, 75, 0.5)" }}
                onPress={() => handleSizeClick(cup)}
              >
                <Text
                  className={`font-sant text-lg p-2 ${
                    activeSize.title === cup.title
                      ? "text-secondary"
                      : "text-textColorMuted"
                  }`}
                >
                  {cup.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
      <View className="flex flex-row justify-between items-center p-2">
        <View className="flex flex-row items-center gap-1 mr-9 ">
          <Text className="font-bold text-secondary font-sans">$</Text>
          <Text className="font-semibold text-textColor font-sans text-3xl">
            {price}
          </Text>
        </View>
        <TouchableOpacity
          className="rounded-xl bg-secondary flex-1 justify-center items-center flex flex-row"
          onPress={toggleAddCart}
        >
          {isAdded ? (
            <>
              <Text className="text-textColor font-sant text-lg p-2">
                Added to Cart
              </Text>
              <Ionicons name="checkmark" size={24} color={Colors.textColor} />
            </>
          ) : (
            <Text className="text-textColor font-sant text-lg p-2">
              Add to Cart
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CoffeeDetails;
