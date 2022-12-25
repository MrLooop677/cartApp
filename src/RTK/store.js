import { configureStore } from "@reduxjs/toolkit";
import sliceCart from "./slices/sliceCart";
import sliceProduct from "./slices/sliceProduct";

export const store = configureStore({
    reducer: {
        productSlice:sliceProduct,
        cartSlice:sliceCart
    },
  })