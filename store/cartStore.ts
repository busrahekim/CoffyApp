import { create } from "zustand";

type Store = {
  cartItems: CartItem[];
  favorites: ApiCoffeItem[];
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (id: number) => void;
  addItemToFavorites: (item: ApiCoffeItem) => void;
  removeItemFromFavorites: (id: number) => void;
};

const useStore = create<Store>((set) => ({
  cartItems: [],
  favorites: [],
  addItemToCart: (item: CartItem) => {
    set((state) => {
      const isExist = state.cartItems.find(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.cupSize.title === item.cupSize.title
      );
      if (isExist) {
        return {
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      } else {
        return {
          cartItems: [...state.cartItems, item],
        };
      }
    });
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
