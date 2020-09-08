import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import { Nav, Links, Button, Icon, Logo } from "./styles";
import logo from "../../images/logo.svg";

const propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      path: PropTypes.string,
    })
  ),
  onLogout: PropTypes.func.isRequired,
};

export default function Sidenav({ links, onLogout }) {
  const history = useHistory();

  return (
    <Nav>
      <Logo src={logo} alt="React Tasks" />
      <Links>
        {links.map((link) => (
          <Button
            key={link.path}
            type="button"
            onClick={() => history.push(link.path)}
          >
            <Icon>{link.icon}</Icon>
          </Button>
        ))}
      </Links>
      <Button type="button" onClick={onLogout}>
        <Icon>exit_to_app</Icon>
      </Button>
    </Nav>
  );
}

Sidenav.propTypes = propTypes;
