import React from 'react';
import { TextInput } from './TextInput';
import { TopPageHandler } from '../containers/TopPageContainer';
import { ShowState } from './ShowState';

interface OwnProps {
  inputValue: string;
}
type Props = OwnProps & TopPageHandler;
export class TopPageForm extends React.Component<Props> {
  render() {
    return (
      <React.Fragment>
        <TextInput
          title="入力"
          inputValue={this.props.inputValue}
          onChangeValue={this.props.handleOnChangeValue}
        />
        <ShowState inputValue={this.props.inputValue} />
      </React.Fragment>
    );
  }
}
