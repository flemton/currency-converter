import { createAsyncThunk } from '@reduxjs/toolkit';
import apiUrl from '../misc/apiUrl';

const getConverted = createAsyncThunk('converted', async ({ from, to }) => {
  const response = await fetch(`${`${`${apiUrl}currencies/${from}`}/${to}`}.json`);
  const data = await response.json();
  return data;
});

export default getConverted;
