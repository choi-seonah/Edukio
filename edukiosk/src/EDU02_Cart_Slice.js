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
      { id: 1, name: "베이컨 토핑", price: 700, amount: 1 },
      { id: 2, name: "올리브 토핑", price: 300, amount: 1 },
      { id: 3, name: "치즈 토핑", price: 2000, amount: 1 },
      { id: 4, name: "옥수수콘 토핑", price: 300, amount: 1 },
      { id: 5, name: "페퍼로니 토핑", price: 800, amount: 1 },
      { id: 6, name: "고구마 크러스트", price: 2500, amount: 1 },
      { id: 7, name: "치즈 크러스트", price: 2000, amount: 1 },
    ],

    cartList: [],
    totalPrice: 0,

    couponList: [
      { id: "AZ58461" },
      { id: "AD88123" },
      { id: "AW45012" },
      { id: "AH57033" },
      { id: "AT77152" },
      { id: "BT77045" },
      { id: "BW99442" },
      { id: "BS01523" },
      { id: "BQ52348" },
      { id: "BN12147" },
    ],
    couponSuccess: false,
    couponMessage: "",
    couponError: null
  },

  reducers: {
    clearCart: state => {
      state.cartList = [];
      state.totalPrice = 0;
      state.couponSuccess = false;
    },
    addToCart: (state, action) => {
      const { pizzaName, optionsName =[] } = action.payload;

      const exist = state.cartList.find((item) => {
        if (item.name !== pizzaName) { return false };
        if (item.options.length !== optionsName.length) { return false };

        const itemOptionNames = item.options.map(o => o.name).sort();
        const newOptionNames = [...optionsName].sort();

        return JSON.stringify(itemOptionNames) === JSON.stringify(newOptionNames);
      });
      if (exist) {
        exist.amount += 1;
      } else {
        const product = state.pizzamenuList.find(e => e.name === pizzaName);
        if (!product) { return };
        const newItem = {
          ...product,
          amount: 1,
          uniqueId: Date.now() + Math.random(),
          options: [],
        };
      

      optionsName.forEach(optName => {
        const findOpt = state.pizzaoptionList.find(o => o.name === optName);
        if (findOpt) {
          newItem.options.push({ name: findOpt.name, price: findOpt.price });
        }
      });

      state.cartList.push(newItem);
    }},



    setTotalPrice: state => {
      let total = 0;

      for (let product of state.cartList) {
        let optionTotal = 0;
        if (product.options) {
          for (let opt of product.options) {
            optionTotal += opt.price;
          }
        }
        total += (product.price + optionTotal) * product.amount;
      }

      state.totalPrice = total; // 기존 totalPrice에 누적하지 말고, 새로 계산한 값만 넣기
    },

    removeProduct: (state, action) => {
      const newCartList = state.cartList.filter(e => e.uniqueId !== action.payload);
      state.cartList = newCartList;
      state.couponMessage = null;
      state.couponError = null;
    },
    amountCount: (state, action) => {
      // 네임이랑 밸류값을 객체로 가져오게 된다. => 내보낼 때도 객체로(중괄호) 내보내기!!
      const { uniqueId, amount } = action.payload;
      const product = state.cartList.find(e => e.uniqueId === uniqueId);
      if (!product) return;
      if (product && amount >= 1) {
        product.amount = amount;
      }
    },
    findCoupon: (state, action) => {
      const coupon = state.couponList.find(c => c.id === action.payload);

      if (coupon) {
        state.totalPrice = state.totalPrice * 0.8;        // 총 결제 금액 할인
        state.couponSuccess = true;                       // 성공 여부 저장
        state.couponMessage = "✅ 쿠폰이 적용되어 20% 할인이 되었습니다!";
        state.couponError = null;                         // 에러는 없으니까 null로
      } else {
        state.couponSuccess = false;
        state.couponError = "존재하지 않는 쿠폰입니다.";
        state.couponMessage = "";                         // 메시지 비우기
      }

    },
    clearInfo: (state) => {
      state.couponMessage = null;
      state.couponError = null;
    },

  },
});

export const { addToCartSide, clearCart, addToCart, setTotalPrice, removeProduct, amountCount, findCoupon, clearInfo } = cartSlice.actions;
export default cartSlice;