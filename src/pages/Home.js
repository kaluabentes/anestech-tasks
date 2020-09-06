import React from "react";
import { Helmet } from "react-helmet";

import AppLayout from "../layouts/AppLayout";

export default function Home() {
  return (
    <AppLayout>
      <Helmet>
        <title>Home - React Tasks</title>
      </Helmet>
      Home
    </AppLayout>
  );
}
