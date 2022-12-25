import { createSlice } from "@reduxjs/toolkit";


const sliceCart=createSlice({
    initialState:{
        Carts:[]
    },
    name:"sliceCart",
    reducers:{
        addToCart(state,action){
            const findItem=state.Carts.find((cart)=>cart.id===action.payload.id)
            if(findItem){
                findItem.quntaty+=1
            }else{
                const productCloney={...action.payload,quntaty:1}
                state.Carts.push(productCloney);
            }
            
        },
        deleteFromCaret(state,action){
         state.Carts=[...state.Carts.filter((cart)=>cart.id !==action.payload.id)]
        },
        Clear(state){
            state.Carts=[]
        }
    },
 
})
export const {addToCart,deleteFromCaret,Clear}=sliceCart.actions
export default sliceCart.reducer