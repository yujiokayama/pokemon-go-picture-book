import { createSlice } from "@reduxjs/toolkit";

type State = {
  counter: number;
  list: any
};

const initialState: State = {
  counter: 0,
  list: {}
};

const testModule = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCount: (state: State) => {
      state.counter++;
    },
  },
});

export const { addCount } = testModule.actions;

export default testModule;
