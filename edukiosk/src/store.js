import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "./EDU02_Pizza_Slice";
import optionReducer from "./EDU02_Option_Slice";
import cartReducer from "./EDU02_Cart_Slice";

const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    option: optionReducer,
    cart: cartReducer,
  },
});

export default store;
