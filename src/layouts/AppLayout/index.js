import React from "react";
import PropTypes from "prop-types";

import Sidenav from "../../components/Sidenav";
import { Container, Main } from "./styles";

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
  return (
    <Container>
      <Sidenav links={LINKS} />
      <Main>{children}</Main>
    </Container>
  );
}

AppLayout.propTypes = propTypes;
