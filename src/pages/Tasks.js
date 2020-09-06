import React from "react";
import { Helmet } from "react-helmet";

import AppLayout from "../layouts/AppLayout";
import PageTitle from "../components/PageTitle";

export default function Tasks() {
  return (
    <AppLayout>
      <Helmet>
        <title>Tasks - React Tasks</title>
      </Helmet>
      <PageTitle>Tasks</PageTitle>
    </AppLayout>
  );
}
