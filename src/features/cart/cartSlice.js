import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      pizzaId: 300,
      name: "Meditterranean",
      quantity: 2,
      unitPrice: 15,
      totalPrice: 30,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },

    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },

    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },

    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  deleteItem,
} = cartSlice.actions;

export default cartSlice.reducer;
