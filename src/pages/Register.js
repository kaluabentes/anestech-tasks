import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useHistory } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import RegisterForm from "../components/RegisterForm";
import AuthApi from "../services/AuthApi";
import { useUser } from "../contexts/user";
import { useNotification } from "../contexts/notification";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [, dispatch] = useUser();
  const history = useHistory();
  const [, dispatchNotification] = useNotification();

  async function register(body) {
    setIsLoading(true);

    try {
      const { data } = await AuthApi.register(body);

      dispatch({ email: data.email });
      history.push("/login");
    } catch (error) {
      setIsLoading(false);
      if (error.response.data) {
        dispatchNotification({
          message: error.response.data.message,
          isOpen: true,
        });
        return;
      }

      dispatchNotification({
        message: error.message,
        isOpen: true,
      });
    }
  }

  return (
    <AuthLayout>
      <Helmet>
        <title>Register - React Tasks</title>
      </Helmet>
      <RegisterForm isLoading={isLoading} onSubmit={register} />
    </AuthLayout>
  );
}
