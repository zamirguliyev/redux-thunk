/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';

export const fetchUsers = createAsyncThunk(
  'user/fetchUsers',
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get('/users');
      return response.data;
    } catch (error:any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
