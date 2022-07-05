import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Form from "./pages/Form/Form";
import Main from "./pages/Main/Main";
import Home from "./pages/Home/Home";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/form" component={Form} />
        <Route path="/profs" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
