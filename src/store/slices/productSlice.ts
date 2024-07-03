import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/types";


interface InitialState {
    status: boolean;
    products: Product[];
    selectedProduct: Product | null;
}

const initialState: InitialState = {
    status: false,
    products: [],
    selectedProduct: null
};


const authSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        storeProducts:(state,action)=>{
            state.status = true;
            state.products = action.payload.products;
        },
        storeSelectedProduct:(state,action)=>{
            state.status = true;
            state.selectedProduct=action.payload.selectedProduct;
        }

    }

})

export const  {storeProducts,storeSelectedProduct} = authSlice.actions

export default authSlice.reducer