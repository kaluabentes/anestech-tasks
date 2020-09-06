import React, { useEffect } from "react";
import PropTypes from "prop-types";

import Sidenav from "../../components/Sidenav";
import { Container, Main } from "./styles";
import { useUser } from "../../contexts/user";
import { useHistory } from "react-router-dom";

const LINKS = [
  {
    icon: "home",
    path: "/",
  },
  {
    icon: "view_list",
    path: "/tasks",
  },
  {
    icon: "group",
    path: "/users",
  },
];

const propTypes = {
  children: PropTypes.node.isRequired,
};

export default function AppLayout({ children }) {
  const [user, dispatch] = useUser();
  const history = useHistory();

  useEffect(() => {
    if (user.ready && !user.token) {
      history.push("/login");
    }
  }, [history, user.ready, user.token]);

  function logout() {
    dispatch({ token: undefined });
  }

  if (!user.token) {
    return null;
  }

  return (
    <Container>
      <Sidenav links={LINKS} onLogout={logout} />
      <Main>{children}</Main>
    </Container>
  );
}

AppLayout.propTypes = propTypes;
