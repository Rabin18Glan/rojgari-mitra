import { createSlice } from "@reduxjs/toolkit";
import { CartProduct, Product } from "../../types/types";


interface OrderState {
    ordered: Product[];
    cart: CartProduct[];
}

const initialState: OrderState = {
   ordered: [],
   cart: []
}


const orderSlice = createSlice({
    name:'order',
    initialState,
    reducers:{
        storeOrders:(state,action)=>{
            
            state.ordered = action.payload.orderedProducts;
            state.cart = action.payload.addProduct;
        },
        fectchCarts:(state,action)=>{
state.cart = action.payload.products;
           },

        
        addOrdered:(state,action)=>{
             state.ordered.push(action.payload.productToOrder);
        },

        removeFromCart:(state,action)=>{
   
                const productIdToRemove = action.payload.product_id; // Assuming the product has an ID
                
                state.cart = state.cart.filter(item => item.id !== productIdToRemove);
              

        },
    refresh:(state)=>{
        state.cart = [];
        state.ordered =[]
    }
        
       

    }

})

export const  {storeOrders,fectchCarts,addOrdered,removeFromCart,refresh} = orderSlice.actions

export default orderSlice.reducer