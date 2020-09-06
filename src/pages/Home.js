import React from "react";
import { Helmet } from "react-helmet";

import AppLayout from "../layouts/AppLayout";
import PageTitle from "../components/PageTitle";

export default function Home() {
  return (
    <AppLayout>
      <Helmet>
        <title>Home - React Tasks</title>
      </Helmet>
      <PageTitle>Em andamento</PageTitle>
    </AppLayout>
  );
}
