import React from 'react';
import './App.css';
import TopPageContainer from './containers/TopPageContainer';
import TestGenerics from './components/TestGenerics';
import Router from './components/Router';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Router />
      <TopPageContainer />
      <TestGenerics />
    </React.Fragment>
  );
};

export default App;
