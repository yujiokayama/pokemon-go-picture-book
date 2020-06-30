import React from 'react';

const genericsFunc = function <T>(arg: T): T {
  return arg;
};

const genericsFuncMulci = function <T, U, P>(arg1: T, arg2: U, arg3: P): P {
  return arg3;
};

const alertMessage = (message: string): void => {
  alert(message);
}

const TestGenerics: React.FC = () => {
  return (
    <div>
      <p>{genericsFunc<number>(1)}</p>
      <p>{genericsFuncMulci('文字列', true, 4)}</p>
      <button
        onClick={() => {
          alertMessage('alert message');
        }}
      >
        alert message
      </button>
    </div>
  );
};

export default TestGenerics;
