import { configureStore } from "@reduxjs/toolkit";
import busSlice from "./EDU03_BUS_SLICE";
const store = configureStore({
    reducer:{
        useBus:busSlice.reducer
    }
})

export default store;