import { createAsyncThunk } from '@reduxjs/toolkit';
import apikey, { apiUrl } from '../misc/apiKey';

const getActiveStocks = createAsyncThunk('stocks/actives', async () => {
  const response = await fetch(`${apiUrl}actives?apikey=${apikey}`);
  const data = await response.json();
  return data;
});

export default getActiveStocks;
