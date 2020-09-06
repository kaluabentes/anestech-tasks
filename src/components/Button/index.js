import React from "react";
import PropTypes from "prop-types";

import DotLoader from "../DotLoader";
import { Container } from "./styles";

const propTypes = {
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  isLoading: false,
};

export default function Button({ isLoading, onClick, children }) {
  return (
    <Container type="button" onClick={onClick}>
      {isLoading ? <DotLoader color="white" /> : children}
    </Container>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
