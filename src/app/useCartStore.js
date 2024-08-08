import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const CartStore = (set, get) => ({
  cart: {
    items: [],
    totalPrice: 0,
    status: "active",
    id: null
  },
  savedIdFromBackend:(ID)=>{
    set((state)=>{
      return {
        cart:{
          ...state.cart,
          id: ID
        }
      }
    })
  },
  savedCartFromBackend : (cart)=>{
    set((state)=>{
      return {
        cart:{
          ...cart
        }
      }
    })
  },
  addItem: (productId, quantity, price, variant) =>
    set((state) => {
      console.log("add")
      const existingItem = state.cart.items.find(
        (item) => item.productId === productId
      );

      if (existingItem) {
        return {
          cart: {
            ...state.cart,
            items: state.cart.items.map((item) =>
              item.productId === productId
                ? {
                    ...item,
                    quantity: quantity,
                    price: price,
                    ...variant
                  }
                : item
            ),
            totalPrice:
              state.cart.totalPrice + quantity * price
          }
        };
      } else {
        return {
          cart: {
            ...state.cart,
            items: [
              ...state.cart.items,
              {
                productId: productId,
                quantity,
                price,
                ...variant
              }
            ],
            totalPrice: state.cart.totalPrice + quantity * price
          }
        };
      }
    }),
  removeItem: (productId) =>
    set((state) => {
      // Find the item to remove
      const itemToRemove = state.cart.items.find(
        (item) => item.productId === productId
      );

      // If the item does not exist, return the current state
      if (!itemToRemove) return state;

      // Update the cart by removing the item and recalculating the total price
      return {
        cart: {
          ...state.cart,
          items: state.cart.items.filter(
            (item) => item.productId !== productId
          ),
          // Subtract the total price of the removed item (price * quantity) from the current total price
          totalPrice:
            state.cart.totalPrice - itemToRemove.price * itemToRemove.quantity
        }
      };
    }),
  clearCart: () =>
    set({
      cart: {
        items: [],
        totalPrice: 0,
        status: "active"
      }
    }),
  updateCart: (productId, updatedFields) =>
    set((state) => {
      const existingItem = state.cart.items.find(
        (item) => item.productId === productId
      );

      if (!existingItem) return state;

      const updatedItems = state.cart.items.map((item) =>
        item.productId === productId ? { ...item, ...updatedFields } : item
      );

      // Recalculate the total price based on the updated items
      const newTotalPrice = updatedItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);

      return {
        cart: {
          ...state.cart,
          items: updatedItems,
          totalPrice: newTotalPrice
        }
      };
    }),
  isProductInCart: (productId) => {
    return get().cart.items.some((item) => item.productId === productId)
  },
  getAllItems: () => {
    const state = get();
    return state.cart.items;
  },
  getProductDetails: (productId) => {
    const state = get();
    const product = state.cart.items.find((item) => item.productId === productId);
    if (product) {
      const { productId, quantity, price, color, size, showCaseImg } = product;
      return { productId, quantity, price, color, size, showCaseImg };
    }
    return {totalPrice: state.cart.totalPrice, cart: state.cart};
  },
});

const useCartStore = create(
  devtools(persist(CartStore, { name: "x-c-a-r-t-x" }))
);

export default useCartStore;
