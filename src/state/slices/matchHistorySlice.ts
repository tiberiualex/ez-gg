import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';

const matchHistoryAdapter = createEntityAdapter();

const initialState = {

};

const matchHistorySlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {},
});

export default matchHistorySlice;
