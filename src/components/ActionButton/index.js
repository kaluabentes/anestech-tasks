import React from "react";
import PropTypes from "prop-types";

import { Button, Icon } from "./styles";

const propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default function ActionButton({ icon, onClick }) {
  return (
    <Button type="button" onClick={onClick}>
      <Icon>{icon}</Icon>
    </Button>
  );
}

ActionButton.propTypes = propTypes;
