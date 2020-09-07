import React from "react";
import PropTypes from "prop-types";

import DotLoader from "../DotLoader";
import { Container } from "./styles";

const propTypes = {
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  isInline: PropTypes.bool,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["secondary", "primary", undefined]),
};

const defaultProps = {
  isLoading: false,
  variant: undefined,
};

export default function Button({
  isLoading,
  isInline,
  onClick,
  children,
  variant,
}) {
  return (
    <Container
      variant={variant}
      isInline={isInline}
      type="button"
      onClick={onClick}
    >
      {isLoading ? <DotLoader color="white" /> : children}
    </Container>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
