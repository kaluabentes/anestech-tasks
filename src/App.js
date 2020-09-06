import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Users from "./pages/Users";
import Login from "./pages/Login";
import GlobalStyles from "./styles/GlobalStyles";

export default function App() {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tasks" component={Tasks} />
          <Route path="/users" component={Users} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
