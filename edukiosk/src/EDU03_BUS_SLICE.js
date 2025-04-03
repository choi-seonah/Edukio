import { createSlice } from "@reduxjs/toolkit";
import busList from "./EDU03_LIST";
const initialState ={
    busList:busList
}


const busSlice = createSlice({
    name:"useBus",
    initialState,
    reducers:{
        busPrice:(state, action)=>{
            
        }
    }
});


export const {} = busSlice.actions;
export default busSlice;