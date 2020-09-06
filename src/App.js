import React, { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Users from "./pages/Users";
import Login from "./pages/Login";
import GlobalStyles from "./styles/GlobalStyles";
import { useUser } from "./contexts/user";

export default function App() {
  const [user] = useUser();
  const history = useHistory();

  useEffect(() => {
    if (user.ready && !user.token) {
      history.push("/login");
    }
  }, [history, user.ready, user.token]);

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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tasks" component={Tasks} />
        <Route path="/users" component={Users} />
        <Route path="/login" component={Login} />
      </Switch>
    </>
  );
}
