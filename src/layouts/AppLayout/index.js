import React from "react";
import PropTypes from "prop-types";

import Sidenav from "../../components/Sidenav";
import { Container, Main } from "./styles";
import { useUser } from "../../contexts/user";

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
  const [user] = useUser();

  if (!user.token) {
    return null;
  }

  return (
    <Container>
      <Sidenav links={LINKS} />
      <Main>{children}</Main>
    </Container>
  );
}

AppLayout.propTypes = propTypes;
