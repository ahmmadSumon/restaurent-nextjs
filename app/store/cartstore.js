import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const useCartStore = create(
  devtools(
    persist(
      (set) => ({
        cartItems: [],
        addToCart: (item) =>
          set((state) => {
            if (!item || !item.title || !item.image) {
              console.error("Invalid item passed to addToCart", item);
              return state;
            }
            console.log("Adding item to cart:", item); // Debugging log
            const normalizedTitle = item.title.trim().toLowerCase();
            const existingItemIndex = state.cartItems.findIndex(
              (cartItem) =>
                cartItem.title.trim().toLowerCase() === normalizedTitle
            );
            if (existingItemIndex >= 0) {
              const updatedCartItems = state.cartItems.map((cartItem, index) =>
                index === existingItemIndex
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem
              );
              return { cartItems: updatedCartItems };
            } else {
              return { cartItems: [...state.cartItems, { ...item, quantity: 1 }] };
            }
          }),
        removeFromCart: (title) =>
          set((state) => ({
            cartItems: state.cartItems.filter(
              (item) => item.title.trim().toLowerCase() !== title.trim().toLowerCase()
            ),
          })),
        increaseQuantity: (title) =>
          set((state) => ({
            cartItems: state.cartItems.map((item) =>
              item.title.trim().toLowerCase() === title.trim().toLowerCase()
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          })),
        decreaseQuantity: (title) =>
          set((state) => ({
            cartItems: state.cartItems.reduce((acc, item) => {
              if (item.title.trim().toLowerCase() === title.trim().toLowerCase()) {
                if (item.quantity > 1) {
                  acc.push({ ...item, quantity: item.quantity - 1 });
                }
                return acc; // Skip if quantity is 1
              }
              acc.push(item);
              return acc;
            }, []),
          })),
        clearCart: () => set({ cartItems: [] }),
      }),
      { name: 'cart-storage' }
    )
  )
);

export default useCartStore;
