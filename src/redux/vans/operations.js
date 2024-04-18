import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://661f8a1816358961cd94a0f7.mockapi.io/';

export const getVans = createAsyncThunk(
  '/vans',
  async (page, thunkAPI) => {
    try {
      const { data } = await axios.get(`/vans?page=${page}&limit=4`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const operations = {
  getVans,
};

export default operations;
