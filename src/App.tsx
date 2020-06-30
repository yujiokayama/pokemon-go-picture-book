import React from 'react';
import './App.css';
import TopPageContainer from './containers/TopPageContainer';
import TestGenerics from './components/TestGenerics';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <TopPageContainer />
      <TestGenerics />
    </React.Fragment>
  );
};

export default App;
