import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../types/product";

const CART_STORAGE_KEY = "shopping_cart";

interface CartItem extends ProductType {
  quantity: number;
}

const saveCartToStorage = (cart: CartItem[]) => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
};

interface CartState {
  items: CartItem[];
  totalQuantity: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
};

const calculateTotals = (cart: CartItem[]) => {
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  return { totalQuantity };
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadCartFromLocalStorage: (state) => {
      const storedCart = localStorage.getItem(CART_STORAGE_KEY);
      state.items = storedCart ? JSON.parse(storedCart) : [];
      Object.assign(state, calculateTotals(state.items));
    },

    addToCart: (state, action: PayloadAction<{ product: ProductType; quantity: number }>) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.product.id);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += action.payload.quantity;
      } else {
        state.items.push({ ...action.payload.product, quantity: action.payload.quantity });
      }
      saveCartToStorage(state.items);
      Object.assign(state, calculateTotals(state.items));
    }
  },
});

export const { addToCart, loadCartFromLocalStorage } = cartSlice.actions;
export default cartSlice.reducer;