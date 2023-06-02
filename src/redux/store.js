import { configureStore } from '@reduxjs/toolkit';
import currenciesReducer from './stocks/currenciesSlice';

const store = configureStore({
  reducer: {
    currencies: currenciesReducer,
  },
});

export default store;
