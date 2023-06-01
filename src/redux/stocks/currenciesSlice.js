import { createSlice } from '@reduxjs/toolkit';
import getCurrencies from '../../components/getCurrencies';

const initialState = {
  currencies: {},
};

const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrencies.fulfilled, (state, action) => ({
      ...state,
      currencies: action.payload,
      ...state.currencies,
      total: Object.keys(action.payload).length,
    }));
  },
});

export default currenciesSlice.reducer;
