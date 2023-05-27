import { createSlice } from '@reduxjs/toolkit';


export const orderSlice = createSlice({
    name: 'order',
    initialState:{
        storeName: "null",
        carts: [],
    },
    reducers: {
        addStoreName(state,action){
            state.storeName = action.payload;
        },
       addProduct(state,action) {
        const { id, quantity, } = action.payload;
        const existingProduct = state.carts.find((product) => product.id === id);

  if (existingProduct) {
    existingProduct.quantity += quantity;
  } else {
    state.carts.push(action.payload);
  }
        },
    deleteProduct(state,action){
        const idx = state.items.findIndex(item => item.id === action.payload.id);
        state.items.splice(idx, 1);
    },
    clearOrder(state){
        state.storeName = "null";
        state.carts = [];
    },
    }
})



export const { addProduct,deleteProduct,clearOrder,addStoreName } = orderSlice.actions;