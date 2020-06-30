import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TextInputActions } from '../actions';
import { TopPageForm } from '../components/TopPageForm';
import { AppState } from '../store';

export interface TopPageHandler {
  handleOnChangeValue(value: string): void;
}

const mapStateToProps = (appState: AppState) => {
  return {
    inputValue: appState.state.inputValue
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    handleOnChangeValue: (value: string) => {
      dispatch(TextInputActions.updateTextInputValue(value));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TopPageForm);
