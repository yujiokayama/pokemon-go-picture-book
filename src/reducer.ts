import { reducerWithInitialState } from '../node_modules/typescript-fsa-reducers';
import { TextInputActions } from './actions';

//ここにstoreが持つstateを書く
export interface State {
  inputValue: string;
}
//ここにstateの初期値を書く
export const initialState: State = {
  inputValue: ''
};

export const Reducer = reducerWithInitialState(initialState).case(
  TextInputActions.updateTextInputValue,
  (state, inputValue) => {
    return { ...state, inputValue };
  }
);
