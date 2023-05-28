import { createAsyncThunk } from '@reduxjs/toolkit';
import { addNewOrder,addHistory,addSpecificHistory } from '../../helpers';

export const addOrder = createAsyncThunk(
  'order/addOrder',
  async (order, thunkAPI) => {
    try {

      const {data} =await addNewOrder(order);
      return data;
    } catch (error) {
      alert("sorry but you order is not send try again")
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)


export const addHistoryState = createAsyncThunk(
  'history/addHistory',
  async (_, thunkAPI) => {
    try {
      const {data} = await addHistory();
      return data;
    } catch (error) {
      alert("sorry but history is not found, try again")
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)


export const addSpecificHistoryState = createAsyncThunk(
  'history/addSpecificHistoryState',
  async (user, thunkAPI) => {
    try {
      const {data} = await addSpecificHistory(user);
      return data;
    } catch (error) {
      alert("sorry but history is not found, try again")
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)