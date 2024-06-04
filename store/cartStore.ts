import { create } from "zustand";

type Store = {
  cartItems: ApiCoffeItem[];
  favorites: ApiCoffeItem[];
  addItemToCart: (item: ApiCoffeItem) => void;
  removeItemFromCart: (id: number) => void;
  addItemToFavorites: (item: ApiCoffeItem) => void;
  removeItemFromFavorites: (id: number) => void;
};

const useStore = create<Store>((set) => ({
  cartItems: [],
  favorites: [],
  addItemToCart: (item) => {
    set((state) => ({
      cartItems: [...state.cartItems, item],
    }));
  },
  removeItemFromCart: (id) => {
    set((state) => ({
      cartItems: state.cartItems.filter((cartItem) => cartItem.id !== id),
    }));
  },
  addItemToFavorites: (item) => {
    set((state) => ({
      favorites: [...state.favorites, item],
    }));
  },
  removeItemFromFavorites: (id) => {
    set((state) => ({
      favorites: state.favorites.filter((cartItem) => cartItem.id !== id),
    }));
  },
}));

export default useStore;
