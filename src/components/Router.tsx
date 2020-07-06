import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">TOP</Link>
      </div>
      <Switch>
        {/* Not Found */}
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
