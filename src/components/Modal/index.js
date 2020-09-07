import React from "react";
import PropTypes from "prop-types";

import { Container, Content } from "./styles";

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default function Modal({ isOpen, children }) {
  return (
    <Container isOpen={isOpen}>
      <Content isOpen={isOpen}>{children}</Content>
    </Container>
  );
}

Modal.propTypes = propTypes;
