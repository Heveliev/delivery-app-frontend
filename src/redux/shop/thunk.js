import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllStore, getOneStore } from '../../helpers';


export const allStores = createAsyncThunk(
  'stores/getStores',
  async (_, thunkAPI) => {
    try {
      const {data} = await getAllStore();
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }

  }
);



export const oneStore = createAsyncThunk(
  'stores/getOneStore',
  async (id, thunkAPI) => {
    try {
      const {data} = await getOneStore(id);
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }}
)