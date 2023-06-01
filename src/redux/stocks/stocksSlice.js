import { createSlice } from '@reduxjs/toolkit';
import getActiveStocks from '../../components/stocksCategory/actives/getActiveStocks';

const initialState = {};

const stocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getActiveStocks.fulfilled, (state, action) => ({
      ...state,
      actives: action.payload,
    }));
  },
});

export default stocksSlice.reducer;
