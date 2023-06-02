import { createSlice } from '@reduxjs/toolkit';
import getCurrencies from '../../components/getCurrencies';
import getConverted from '../../components/getConverted';

const initialState = {
  currencies: {},
  isLoading: false,
  fulfilled: false,
};

const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    clearConverted: (state) => ({
      ...state,
      converted: { none: 'Check currencies', from: '--', to: '--' },
    }),
    currency: (state, action) => ({
      ...state,
      currency: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrencies.fulfilled, (state, action) => ({
      ...state,
      currencies: action.payload,
      isLoading: false,
      ...state.currencies,
      fulfilled: true,
      total: Object.keys(action.payload).length,
    }));
    builder.addCase(getConverted.fulfilled, (state, action) => ({
      ...state,
      converted: action.payload,
    }));
    builder.addCase(getCurrencies.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
  },
});

export const { clearConverted, currency } = currenciesSlice.actions;

export default currenciesSlice.reducer;
