import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

import Input from "../Input";
import Button from "../Button";
import { Form, Logo } from "./styles";
import logo from "../../images/logo.svg";

const propTypes = {
  error: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default function LoginForm({ onSubmit, isLoading }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formRef = useRef();

  function handleSubmit() {
    const formElement = formRef.current;

    if (!formElement.checkValidity()) {
      formElement.reportValidity();
      return;
    }

    onSubmit({ email, password });
  }

  return (
    <Form ref={formRef}>
      <Logo src={logo} alt="React Tasks" />
      <Input
        placeholder="E-mail"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        margin="0 0 15px 0"
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
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
