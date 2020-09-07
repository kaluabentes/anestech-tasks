import React from "react";
import PropTypes from "prop-types";

import { Header, Actions } from "./styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  actions: PropTypes.node,
};

const defaultProps = {
  actions: undefined,
};

export default function PageHeader({ children, actions }) {
  return (
    <Header>
      {children}
      {actions && <Actions>{actions}</Actions>}
    </Header>
  );
}

PageHeader.propTypes = propTypes;
PageHeader.defaultProps = defaultProps;
