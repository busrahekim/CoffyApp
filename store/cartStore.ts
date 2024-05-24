import { create } from "zustand";

type CartItem = {
  id: number;
  name: string;
  price: number;
};

type Store = {
  cartItems: CartItem[];
  addItemToCart: (item: CartItem) => void;
};

const useStore = create<Store>((set) => ({
  cartItems: [],
  addItemToCart: (item) => {
    set((state) => ({
      cartItems: [...state.cartItems, item],
    }));
  },
}));

export default useStore;
