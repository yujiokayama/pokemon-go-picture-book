import React from 'react';

interface OwnProps {
  inputValue: string;
}

type Props = OwnProps;
export const ShowState: React.FC<Props> = (props) => {
  return (
    <div>
      <label>[states]</label>
      <div>{props.inputValue}</div>
    </div>
  );
};
