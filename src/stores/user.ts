import { createSlice } from "@reduxjs/toolkit";

// Stateの初期状態
const initialState = {
  name: ''
};

// Sliceを生成する
const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action) => {
      return Object.assign({}, state, { name: action.payload })
    },
    clearName: state => {
      return Object.assign({}, state, { name: "" })
    }
  }
});

// Reducerをエクスポートする
export default slice.reducer;

// Action Creatorsをエクスポートする
export const { setName, clearName } = slice.actions;