import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cardslice";

const Store = configureStore({
    reducer:{
        cart : cartReducer,
    },
})

export default Store;