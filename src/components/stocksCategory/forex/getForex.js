import { createAsyncThunk } from '@reduxjs/toolkit';
import apikey, { apiUrl } from '../../../misc/apiKey';

const getForex = createAsyncThunk('forex', async () => {
  const response = await fetch(`${apiUrl}fx?apikey=${apikey}`);
  const data = await response.json();
  return data;
});

export default getForex;
