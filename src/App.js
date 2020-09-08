import React from "react";
import { Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Users from "./pages/Users";
import Login from "./pages/Login";
import Register from "./pages/Register";
import GlobalStyles from "./styles/GlobalStyles";
import Notification from "./components/Notification";
import { useNotification } from "./contexts/notification";

export default function App() {
  const [
    { isOpen: isNotificationOpen, message: notification },
    dispatch,
  ] = useNotification();

  function closeNotification() {
    dispatch({
      isOpen: false,
    });
  }

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
        <Route path="/register" component={Register} />
      </Switch>
      <Notification
        isOpen={isNotificationOpen}
        message={notification}
        onClose={closeNotification}
      />
    </>
  );
}
