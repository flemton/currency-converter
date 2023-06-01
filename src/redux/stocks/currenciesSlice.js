import { createSlice } from '@reduxjs/toolkit';
import getCurrencies from '../../components/getCurrencies';
import getConverted from '../../components/getConverted';

const initialState = {
  currencies: {},
};

const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    clearConverted: (state) => ({
      ...state,
      converted: { none: 'Check currencies', nan: '0' },
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrencies.fulfilled, (state, action) => ({
      ...state,
      currencies: action.payload,
      ...state.currencies,
      total: Object.keys(action.payload).length,
    }));
    builder.addCase(getConverted.fulfilled, (state, action) => ({
      ...state,
      converted: action.payload,
    }));
  },
});

export const { clearConverted } = currenciesSlice.actions;

export default currenciesSlice.reducer;
