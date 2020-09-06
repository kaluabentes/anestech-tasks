import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import RegisterForm from "../components/RegisterForm";
import AuthApi from "../services/AuthApi";
import { useUser } from "../contexts/user";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [, dispatch] = useUser();
  const history = useHistory();

  async function register(body) {
    setIsLoading(true);

    try {
      const { data } = await AuthApi.register(body);

      dispatch({ email: data.email });
      history.push("/login");
    } catch (error) {
      setIsLoading(false);
      if (error.response.data) {
        alert(error.response.data.message);
        return;
      }

      alert(error.message);
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
