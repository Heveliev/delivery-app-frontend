import { createSlice } from '@reduxjs/toolkit';
import {allStores, oneStore } from './thunk';
import { isAnyOf } from '@reduxjs/toolkit';



const actions = [allStores,oneStore];

const handleFetchStores = (state, action) => {
  state.shops = action.payload;
};

const handleFetchOneStore = (state, action) =>{
 state.shop = action.payload
}



export const storesSlice = createSlice({
    name: 'stores',
    initialState:{
    shops:[],
    shop:{},
    isLoading: false,
    error: null
  },

 extraReducers: builder =>
    builder
      .addCase(allStores.fulfilled, handleFetchStores)
      .addCase(oneStore.fulfilled,handleFetchOneStore)
      .addMatcher(
        isAnyOf(...actions.map(action => action.fulfilled)),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(isAnyOf(...actions.map(action => action.pending)), state => {
        state.isLoading = true;
      })
      .addMatcher(
        isAnyOf(...actions.map(action => action.rejected)),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
      reducers:{
        backToSelectStore(state){
          state.shop = {}
        }
      },

})


export const { backToSelectStore } = storesSlice.actions;