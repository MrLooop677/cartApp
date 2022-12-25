import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// action
export const fetchProduct= createAsyncThunk("sliceProduct/fetchProduct",async()=>{
        const res=await fetch("http://localhost:3009/data")
        const data=await res.json();
        return data
})
const sliceProduct=createSlice({
    initialState:{
        products:[]
    },
    name:"sliceProduct",
    reducers:{
      
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProduct.fulfilled,(state,action)=>{
            state.products= action.payload
        })
    }
})
export const {}=sliceProduct.actions
export default sliceProduct.reducer