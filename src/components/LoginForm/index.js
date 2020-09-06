import React, { useRef } from "react";
import PropTypes from "prop-types";

import Input from "../Input";
import Button from "../Button";
import { Form, Logo } from "./styles";
import logo from "../../images/logo.svg";

const propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default function LoginForm({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  isLoading,
}) {
  const formRef = useRef();

  function handleSubmit() {
    const formElement = formRef.current;

    if (!formElement.checkValidity()) {
      formElement.reportValidity();
      return;
    }

    onSubmit();
  }

  return (
    <Form ref={formRef}>
      <Logo src={logo} alt="React Tasks" />
      <Input
        placeholder="E-mail"
        type="email"
        value={email}
        onChange={onEmailChange}
        required
        margin="0 0 15px 0"
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={onPasswordChange}
        required
        margin="0 0 15px 0"
      />
      <Button isLoading={isLoading} onClick={handleSubmit}>
        Entrar
      </Button>
    </Form>
  );
}

LoginForm.propTypes = propTypes;
