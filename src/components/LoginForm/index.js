import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

import AuthForm from "../AuthForm";
import AuthLogo from "../AuthLogo";
import AuthTitle from "../AuthTitle";
import Input from "../Input";
import Button from "../Button";
import logo from "../../images/logo.svg";
import { useHistory } from "react-router-dom";

const propTypes = {
  initialEmail: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const defaultProps = {
  initialEmail: "",
};

export default function LoginForm({ initialEmail, onSubmit, isLoading }) {
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState("");
  const formRef = useRef();
  const history = useHistory();

  function handleSubmit() {
    const formElement = formRef.current;

    if (!formElement.checkValidity()) {
      formElement.reportValidity();
      return;
    }

    onSubmit({ email, password });
  }

  return (
    <AuthForm ref={formRef}>
      <AuthLogo src={logo} alt="React Tasks" />
      <AuthTitle>Login</AuthTitle>
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
      <Button variant="primary" isLoading={isLoading} onClick={handleSubmit}>
        Entrar
      </Button>
      <Button type="button" onClick={() => history.push("/register")}>
        Criar uma conta
      </Button>
    </AuthForm>
  );
}

LoginForm.propTypes = propTypes;
LoginForm.defaultProps = defaultProps;
