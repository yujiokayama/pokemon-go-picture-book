import * as React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Page1 from '../pages/Page1';

const Router = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">TOP</Link>
          </li>
          <li>
            <Link to="/page1">page1</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/page1" component={Page1} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
