import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  count: number;
};

const initialState: State = {
  count: 0,
};

const tasksModule = createSlice({
  name: "test",
  initialState,
  reducers: {
    addCount(state: State) {
      state.count++;
    },
  },
});

export const { addCount } = tasksModule.actions;

export default tasksModule;
