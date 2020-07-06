import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
// import store from './stores/store';

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
