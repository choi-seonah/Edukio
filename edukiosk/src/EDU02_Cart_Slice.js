import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    pizzamenuList: [
      { id: 1, name: "베이컨 피자", src: "/media/bacon.jpg", price: 18000, amount: 1 },
      { id: 2, name: "페퍼로니 피자", src: "/media/pepporoni.jpg", price: 16000, amount: 1 },
      { id: 3, name: "하와이안 피자", src: "/media/hawaiian.jpg", price: 21000, amount: 1 },
      { id: 4, name: "마르게리따 피자", src: "/media/margherita.jpg", price: 17000, amount: 1 },
      { id: 5, name: "불고기 피자", src: "/media/bulgogi.jpg", price: 20000, amount: 1 },
      { id: 6, name: "고구마 피자", src: "/media/sweetpotato.jpg", price: 15000, amount: 1 },
    ],
    pizzaoptionList: [
      { id: 1, name: "베이컨 토핑 추가", price: 700, amount: 1 },
      { id: 2, name: "올리브 토핑 추가", price: 300, amount: 1 },
      { id: 3, name: "치즈 토핑 추가", price: 2000, amount: 1 },
      { id: 4, name: "옥수수콘 토핑 추가", price: 300, amount: 1 },
      { id: 5, name: "페퍼로니 토핑 추가", price: 800, amount: 1 },
      { id: 6, name: "고구마 크러스트 변경", price: 2500, amount: 1 },
      { id: 7, name: "치즈 크러스트 변경", price: 2000, amount: 1 },
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
