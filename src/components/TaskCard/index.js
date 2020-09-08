import React from "react";
import PropTypes from "prop-types";

import { Card, Grid, Description, StartDate, User } from "./styles";

const propTypes = {
  description: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

export default function TaskCard({ description, startDate, user }) {
  return (
    <Card>
      <Description>{description}</Description>
      <StartDate>{startDate}</StartDate>
      <User>{user}</User>
    </Card>
  );
}

TaskCard.propTypes = propTypes;
TaskCard.Grid = Grid;
