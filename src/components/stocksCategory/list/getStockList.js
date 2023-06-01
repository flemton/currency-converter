import { createAsyncThunk } from '@reduxjs/toolkit';
import apikey, { apiUrl } from '../../../misc/apiUrl';

const getStockList = createAsyncThunk('stocks/list', async () => {
  const response = await fetch(`${apiUrl}etf/list?apikey=${apikey}`);
  const data = await response.json();
  return data;
});

export default getStockList;
