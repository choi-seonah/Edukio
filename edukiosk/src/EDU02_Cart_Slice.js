import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    pizzamenuList: [
      { id: 1, name: "bacon", src: "/media/bacon.jpg", price: 18000, amount: 1 },
      { id: 2, name: "pepporoni", src: "/media/pepporoni.jpg", price: 16000, amount: 1 },
      { id: 3, name: "hawaiian", src: "/media/hawaiian.jpg", price: 21000, amount: 1 },
      { id: 4, name: "margherita", src: "/media/margherita.jpg", price: 17000, amount: 1 },
      { id: 5, name: "bulgogi", src: "/media/bulgogi.jpg", price: 20000, amount: 1 },
      { id: 6, name: "sweetpotato", src: "/media/sweetpotato.jpg", price: 15000, amount: 1 },
    ],
    pizzaoptionList: [
      { id: 1, name: "bacon", price: 700, amount: 1 },
      { id: 2, name: "olive", price: 300, amount: 1 },
      { id: 3, name: "cheese", price: 2000, amount: 1 },
      { id: 4, name: "corn", price: 300, amount: 1 },
      { id: 5, name: "addpepporoni", price: 800, amount: 1 },
      { id: 6, name: "edgesweetpotato", price: 2500, amount: 1 },
      { id: 7, name: "crustcheese", price: 2000, amount: 1 },
      { id: 8, name: "coke", src: "/media/coke.JPG", price: 2500, amount: 1 },
      { id: 9, name: "spaghetti", src: "/media/spaghetti.JPG", price: 4500, amount: 1 },
    ],
    cartList: [],
    totalPrice: 0,
  },
  reducers: {
    clearCart: state => {
      state.cartList = [];
      state.totalPrice = 0;
    },
    addToCart: (state, action) => {
      // pizza.name랑 action.payload 같음
      const product = state.pizzamenuList.find(e => e.name === action.payload);
      if (product) {
        const exist = state.cartList.find(e => e.name === action.payload);
        if (exist) {
          exist.amount += 1;
        } else {
          state.cartList.push(product);
        }
      }
    },
    addToCartSide: (state, action) => {
      const option = state.pizzaoptionList.find(e => e.name === action.payload);
      if (!option) return;

      // 가장 최근에 담긴 피자 찾기
      const lastPizza = state.cartList[state.cartList.length - 1];
      if (!lastPizza) return;

      // 옵션 배열이 없으면 생성
      if (!lastPizza.options) {
        lastPizza.options = [];
      }

      // 중복 방지 (원하면 지우면 됨)
      const exist = lastPizza.options.find(o => o.name === option.name);
      if (!exist) {
        lastPizza.options.push({ name: option.name, price: option.price });
      }
    },
    setTotalPrice: state => {
      for (let product of state.cartList) {
        state.totalPrice = state.totalPrice + product.amount * product.price;
      }
    },
    removeProduct: (state, action) => {
      const newCartList = state.cartList.filter(e => e.name !== action.payload);
      state.cartList = newCartList;
    },
    amountCount: (state, action) => {
      // 네임이랑 밸류값을 객체로 가져오게 된다. => 내보낼 때도 객체로(중괄호) 내보내기!!
      const { _name, _amount } = action.payload;
      const product = state.cartList.find(e => e.name === _name);
      if (product) {
        product.amount = _amount;
      }
    },
  },
});

export const { addToCartSide, clearCart, addToCart, setTotalPrice, removeProduct, amountCount } = cartSlice.actions;
export default cartSlice;
