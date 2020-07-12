import { combineReducers } from "@reduxjs/toolkit";
import TestModules from "./modules/testModules";

const rootReducer = combineReducers({
  pictureBook: TestModules.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
