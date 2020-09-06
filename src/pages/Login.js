import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import LoginForm from "../components/LoginForm";
import AuthApi from "../services/AuthApi";
import { useUser } from "../contexts/user";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [, dispatch] = useUser();
  const history = useHistory();

  async function login(body) {
    setIsLoading(true);

    try {
      const { data } = await AuthApi.login(body);

      dispatch({ token: data.token });
      history.push("/");
    } catch (error) {
      setIsLoading(false);
      alert(error.response.data.message);
    }
  }

  return (
    <AuthLayout>
      <Helmet>
        <title>Login - React Tasks</title>
      </Helmet>
      <LoginForm isLoading={isLoading} onSubmit={login} />
    </AuthLayout>
  );
}
