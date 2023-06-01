import { createAsyncThunk } from '@reduxjs/toolkit';
import apiUrl from '../misc/apiUrl';

const getCurrencies = createAsyncThunk('currencies', async () => {
  const response = await fetch(`${apiUrl}currencies.json`);
  const data = await response.json();
  return data;
});

export default getCurrencies;
