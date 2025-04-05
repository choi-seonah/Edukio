import { createSlice } from "@reduxjs/toolkit";
import busList from "./EDU03_List";

const initialState ={
    busList: busList,
    selectedTicket: null,
    message: "",
}

const busSlice = createSlice({
    name:"useBus",
    initialState,
    reducers:{
        
        findTicket: (state, action) => {
            const bookingTicket = state.busList.find((bus) => bus.id === action.payload);
            if (bookingTicket) {
                state.selectedTicket = bookingTicket;
                state.message = "";
            } else {
                state.selectedTicket = null;
                state.message = "예매번호가 틀렸습니다.";
            }
        },
    }
}); 


export const { findTicket } = busSlice.actions;
export default busSlice;