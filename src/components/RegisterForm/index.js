import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

import AuthForm from "../AuthForm";
import AuthLogo from "../AuthLogo";
import AuthTitle from "../AuthTitle";
import Input from "../Input";
import Button from "../Button";
import { BackButton, BackIcon } from "./styles";
import logo from "../../images/logo.svg";
import { useHistory } from "react-router-dom";

const propTypes = {
  error: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default function RegisterForm({ onSubmit, isLoading }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formRef = useRef();
  const history = useHistory();

  function handleSubmit() {
    const formElement = formRef.current;

    if (!formElement.checkValidity()) {
      formElement.reportValidity();
      return;
    }

    onSubmit({ name, email, password });
  }

  return (
    <AuthForm ref={formRef}>
      <BackButton type="button" onClick={() => history.push("/login")}>
        <BackIcon>arrow_back</BackIcon>
      </BackButton>
      <AuthLogo src={logo} alt="React Tasks" />
      <AuthTitle>Register</AuthTitle>
      <Input
        placeholder="Name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
        margin="0 0 20px 0"
      />
      <Input
        placeholder="E-mail"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        margin="0 0 20px 0"
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
        margin="0 0 20px 0"
      />
      <Button variant="primary" isLoading={isLoading} onClick={handleSubmit}>
        Registrar
      </Button>
    </AuthForm>
  );
}

RegisterForm.propTypes = propTypes;
