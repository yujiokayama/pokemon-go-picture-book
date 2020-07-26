import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Pokemon {
  id: number;
  name: any;
  type: string[];
  base: any;
}

type State = {
  list: Pokemon[];
};

const initialState: State = {
  list: []
};

export const fetchApi = createAsyncThunk('pokeModules/fetchApi', async () => {
  const response = await axios.get(`./assets/pokedex.json`);
  return response.data;
});

const pokeModule = createSlice({
  name: 'pictureBook',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchApi.fulfilled, (state, action) => {
      return {
        ...state,
        list: action.payload
      };
    });
  }
});

export const {} = pokeModule.actions;

export default pokeModule;
