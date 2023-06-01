import { createSlice } from '@reduxjs/toolkit';
import getActiveStocks from '../../components/stocksCategory/actives/getActiveStocks';
import getStockList from '../../components/stocksCategory/list/getStockList';
import getForex from '../../components/stocksCategory/forex/getForex';

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
    builder.addCase(getStockList.fulfilled, (state, action) => ({
      ...state,
      list: action.payload,
    }));
    builder.addCase(getForex.fulfilled, (state, action) => ({
      ...state,
      forex: action.payload,
    }));
  },
});

export default stocksSlice.reducer;
