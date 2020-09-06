import React from "react";
import PropTypes from "prop-types";

import { Container, Dot } from "./styles";
import { COLOR_BLACK } from "../../styles/colors";

const propTypes = {
  color: PropTypes.string,
};

const defaultProps = {
  color: COLOR_BLACK,
};

export default function DotLoader({ color }) {
  return (
    <Container>
      <Dot color={color} />
      <Dot color={color} />
      <Dot color={color} />
    </Container>
  );
}

DotLoader.propTypes = propTypes;
DotLoader.defaultProps = defaultProps;
