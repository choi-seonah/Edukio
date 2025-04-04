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
            // const busResult = //20000 * 좌석선택값
        
        }
    }
}); 


export const {} = busSlice.actions;
export default busSlice;