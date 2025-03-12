import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    user: useReducer,
    cart: cartReducer,
  },
});
