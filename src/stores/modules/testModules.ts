import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type State = {
  counter: number;
  list: any;
};

const initialState: State = {
  counter: 0,
  list: [],
};

const testModule = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCount: (state: State) => {
      state.counter++;
    },
    getPokemonList: (state: State) => {
      axios
        .get("./assets/pokedex.json")
        .then((response) => {
          state.list = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});

export const { addCount, getPokemonList } = testModule.actions;

export default testModule;
