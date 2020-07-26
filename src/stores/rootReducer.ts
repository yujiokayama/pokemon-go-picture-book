import { combineReducers } from "@reduxjs/toolkit";
import PokeModules from "./modules/PokeModules";

const rootReducer = combineReducers({
  pokeModules: PokeModules.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
