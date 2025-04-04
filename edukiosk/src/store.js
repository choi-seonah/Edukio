import { configureStore } from "@reduxjs/toolkit";
import PizzaSlice from "./EDU02_PIZZA_SLICE";

const store = configureStore({
    reducer: {
        pizza: PizzaSlice.reducer
    }
})

export default store;