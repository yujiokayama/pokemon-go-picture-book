import React from "react";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";

import Detail from "../pages/detail";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">TOP</Link>
        <Link to="detail">詳細</Link>
      </div>
      <Switch>
        <Route path="/detail" component={Detail} />
        {/* Not Found */}
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
