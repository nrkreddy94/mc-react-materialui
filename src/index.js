import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Admin from "./Admin.js";
import "./assets/css/material-dashboard-react.css"

const hist = createBrowserHistory();
ReactDOM.render(
  <Router history={hist}>
    <React.StrictMode>
      <Switch>
        <Route path="/" component={Admin} />
      </Switch>

    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
/* <App id="react-poc" name="react-poc"/>*/

