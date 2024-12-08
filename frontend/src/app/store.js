import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/auth/authSlice";
import productReducer from "../features/products/productSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    item: productReducer,
  },
});
