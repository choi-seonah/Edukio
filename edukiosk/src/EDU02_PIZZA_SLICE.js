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
            { id: 6, name: "sweetpotato", src: "/media/sweetpotato.jpg", price: 15000 }
        ],
        pizzaOptionList: [
            { id: 1, name: "bacon", price: 700 },
            { id: 2, name: "olive", price: 300 },
            { id: 3, name: "cheese", price: 2000 },
            { id: 4, name: "corn", price: 300 },
            { id: 5, name: "addpepporoni", price: 800 },
            { id: 6, name: "edgesweetpotato", price: 2500 },
            { id: 7, name: "crustcheese", price: 2000 },
            { id: 8, name: "coke", price: 2500 },
            { id: 9, name: "spaghetti", price: 4500 }
        ],
        cartList: [],
        totalPrice: 0,
        selectedOptions: [],
        selectedPizza: null
    },
    reducers: {
        selectPizza: (state, action) => {
            state.selectedPizza = action.payload;
        },
        selectOption: (state, action) => {
            state.selectedPizza = action.payload;
        },
        setTotalPrice: (state, action) => {
            state.totalPrice = action.payload;
        },
        addToCart: (state) => {
            let totalPrice = state.selectedPizza.price;
            state.selectedOptions.forEach((optionId) => {
                const option = state.pizzaOptionList.find(opt => opt.id === optionId);
                if (option) {
                    totalPrice += option.price;
                }
            });

            state.totalPrice = totalPrice;

            state.cartList.push({
                pizza: state.selectedPizza,
                options: state.selectedOptions,
                totalPrice,
            });
        },

    },
});

export const { selectPizza, selectOption, setTotalPrice, addToCart } = PizzaSlice.actions;
export default PizzaSlice;