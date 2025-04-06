import { createSlice } from "@reduxjs/toolkit";

const PizzaSlice = createSlice({
  name: "pizza",
  initialState: {
    pizzaMenuList: [
      { id: 1, name: "bacon", src: "/media/bacon.jpg", price: 18000 },
      { id: 2, name: "pepporoni", src: "/media/pepporoni.jpg", price: 16000 },
      { id: 3, name: "hawaiian", src: "/media/hawaiian.jpg", price: 21000 },
      { id: 4, name: "margherita", src: "/media/margherita.jpg", price: 17000 },
      { id: 5, name: "bulgogi", src: "/media/bulgogi.jpg", price: 20000 },
      { id: 6, name: "sweetpotato", src: "/media/sweetpotato.jpg", price: 15000},
    ],
    selectedPizza: [],
  },
  reducers: {
    addPizza: (state, action) => {
      state.selectedPizza.push = action.payload;
    },
    },
});

export const { addPizza} = PizzaSlice.actions;
export default PizzaSlice.reducer;
