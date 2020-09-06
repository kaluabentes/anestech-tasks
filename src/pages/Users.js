import React from "react";
import { Helmet } from "react-helmet";

import AppLayout from "../layouts/AppLayout";
import PageTitle from "../components/PageTitle";

export default function Users() {
  return (
    <AppLayout>
      <Helmet>
        <title>Users - React Tasks</title>
      </Helmet>
      <PageTitle>Users</PageTitle>
    </AppLayout>
  );
}
