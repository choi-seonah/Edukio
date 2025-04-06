import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addCart: (state, action) => {
      const newItem = action.payload;
      state.items.push(newItem);
    },

    removeCart: (state, action) => {
      const pizzaRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== pizzaRemove);
    },
  },
});

export const { addCart, removeCart } = CartSlice.actions;
export default CartSlice.reducer;
