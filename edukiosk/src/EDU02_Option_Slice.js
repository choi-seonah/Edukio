import { createSlice } from "@reduxjs/toolkit";

const OptionSlice = createSlice({
  name: "option",
  initialState: {
    pizzaOptionList: [
      { id: 1, name: "bacon", price: 700 },
      { id: 2, name: "olive", price: 300 },
      { id: 3, name: "cheese", price: 2000 },
      { id: 4, name: "corn", price: 300 },
      { id: 5, name: "addpepporoni", price: 800 },
      { id: 6, name: "edgesweetpotato", price: 2500 },
      { id: 7, name: "crustcheese", price: 2000 },
      { id: 8, name: "coke", price: 2500 },
      { id: 9, name: "spaghetti", price: 4500 },
    ],
    selectedOptions: [],
  },
  reducers: {
    addOption: (state, action) => {
      state.selectedOptions.push(action.payload);
    },
    removeOption: (state, action) => {
      state.selectedOptions = state.selectedOptions.filter(
        (option) => option.id !== action.payload
      );
    },
  },
});

export const { addOption, removeOption } = OptionSlice.actions;
export default OptionSlice.reducer;
