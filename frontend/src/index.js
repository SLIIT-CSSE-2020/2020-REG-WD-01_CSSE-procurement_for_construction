import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store/index";
import { Provider } from "react-redux";
import jwt from "jsonwebtoken";
const jwt_secret =
  "xsrHWRQStAHvOd4Eqe7tXvtKWCgFtkOhSXmmHtLNGVEvnOWAaWGMVtIVWnB8DBjC";
let token = localStorage.getItem("token");
if (token) {
  jwt.verify(token, jwt_secret, (err, decoded) => {});
}

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};
if (token) {
  render();
} else {
  render();
}

serviceWorker.unregister();
