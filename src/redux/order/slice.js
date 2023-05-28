import { isAnyOf } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { addOrder,addHistoryState,addSpecificHistoryState } from './thunk';


const actions = [addOrder,addHistoryState,addSpecificHistoryState];
const setOrderNumber = (state,action) => {
state.orderNumber = action.payload.orderNumber;

}
const setHistory = (state,action) =>{
  state.history = action.payload;
}

export const orderSlice = createSlice({
    name: 'order',
    initialState:{
        storeName: "null",
        carts: [],
        orderNumber: "",
        history: [],
        isLoading: false,
        error: null,
    },
    extraReducers:(builder)=>{
      builder.addCase(addOrder.fulfilled,setOrderNumber)
      builder.addCase(addHistoryState.fulfilled,setHistory)
      builder.addCase(addSpecificHistoryState.fulfilled,setHistory);
      builder.addMatcher(
        isAnyOf(...actions.map(action => action.fulfilled)),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      builder.addMatcher(isAnyOf(...actions.map(action => action.pending)), state => {
        state.isLoading = true;
      })
      builder.addMatcher(
        isAnyOf(...actions.map(action => action.rejected)),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
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
        const idx = state.carts.findIndex(item => item.id === action.payload);
        if (idx !== -1) {
            state.carts.splice(idx, 1);
          }
    },
    updateQuantity(state,action){
        const { id, quantity } = action.payload;
        const index = state.carts.findIndex(item => item.id === id);
        if (index !== -1) {
          state.carts[index] = { ...state.carts[index], quantity };
        }
    },
    clearOrder(state){
        state.storeName = "null";
        state.carts = [];
    },
    clearOrderNumber(state){
      state.orderNumber = "";
    }
    }
})



export const { addProduct,deleteProduct,clearOrder,addStoreName,updateQuantity,clearOrderNumber } = orderSlice.actions;