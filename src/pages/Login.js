import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useHistory } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import LoginForm from "../components/LoginForm";
import AuthApi from "../services/AuthApi";
import { useUser } from "../contexts/user";
import { useNotification } from "../contexts/notification";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, dispatch] = useUser();
  const history = useHistory();
  const [, dispatchNotification] = useNotification();

  async function login(body) {
    setIsLoading(true);

    try {
      const { data } = await AuthApi.login(body);

      dispatch({ token: data.token, email: data.email });
      history.push("/");
    } catch (error) {
      setIsLoading(false);
      dispatchNotification({
        message: error.response.data.message,
        isOpen: true,
      });
    }
  }

  return (
    <AuthLayout>
      <Helmet>
        <title>Login - React Tasks</title>
      </Helmet>
      <LoginForm
        initialEmail={user.email}
        isLoading={isLoading}
        onSubmit={login}
      />
    </AuthLayout>
  );
}
