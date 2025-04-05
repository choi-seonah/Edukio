import { configureStore } from "@reduxjs/toolkit";
import PizzaSlice from "./EDU02_Pizza_Slice";

const store = configureStore({
    reducer: {
        pizza: PizzaSlice.reducer
    }
})

export default store;