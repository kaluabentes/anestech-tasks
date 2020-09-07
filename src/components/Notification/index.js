import React, { useEffect } from "react";
import PropTypes from "prop-types";

import Icon from "../Icon";
import { Container, CloseButton } from "./styles";

const DURATION = 3000;

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

let timeout;

export default function Notification({ isOpen, message, onClose }) {
  useEffect(() => {
    if (isOpen) {
      clearTimeout(timeout);
      timeout = setTimeout(onClose, DURATION);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isOpen, onClose]);

  return (
    <Container isOpen={isOpen}>
      {message}
      <CloseButton type="button" onClick={onClose}>
        <Icon>close</Icon>
      </CloseButton>
    </Container>
  );
}

Notification.propTypes = propTypes;
