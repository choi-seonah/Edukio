import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./EDU02_Cart_Slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
