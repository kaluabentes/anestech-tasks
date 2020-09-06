import React, { useState } from "react";
import { Helmet } from "react-helmet";

import AuthLayout from "../layouts/AuthLayout";
import LoginForm from "../components/LoginForm";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AuthLayout>
      <Helmet>
        <title>Login - React Tasks</title>
      </Helmet>
      <LoginForm
        email={email}
        password={password}
        isLoading={isLoading}
        onEmailChange={(event) => setEmail(event.target.value)}
        onPasswordChange={(event) => setPassword(event.target.value)}
        onSubmit={() => setIsLoading(true)}
      />
    </AuthLayout>
  );
}
