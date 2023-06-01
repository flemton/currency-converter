import { createSlice } from '@reduxjs/toolkit';
import getActiveStocks from '../../components/stocksCategory/actives/getActiveStocks';
import getStockList from '../../components/stocksCategory/list/getStockList';
import getCurrencies from '../../components/getCurrencies';

const initialState = {};

const currenciesSlice = createSlice({
  name: 'currencies',
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
    builder.addCase(getCurrencies.fulfilled, (state, action) => ({
      ...state,
      currencies: action.payload,
    }));
  },
});

export default currenciesSlice.reducer;
