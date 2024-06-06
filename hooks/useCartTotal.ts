import useStore from "@/store/cartStore";

const useCartTotal = () => {
  const cartItems = useStore((state) => state.cartItems);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity * item.cupSize.sizePrice,
    0
  );

  return total;
};

export default useCartTotal;
