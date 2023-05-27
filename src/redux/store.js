import { configureStore } from '@reduxjs/toolkit';
import {storesSlice} from "./shop";
import { modalSlice } from './modal';
import {orderSlice} from "./order";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const orderPersistConfig = {
  key: 'order',
  storage,
}



export const store = configureStore({
  reducer: {
    store: storesSlice.reducer,
    orders:persistReducer(orderPersistConfig, orderSlice.reducer),
    modal:modalSlice.reducer, 
    
  },
  middleware(getDefaultMiddleware){
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
  }
},)

export const persistor = persistStore(store)

