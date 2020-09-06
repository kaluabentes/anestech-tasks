import React from "react";
import { Helmet } from "react-helmet";

import AppLayout from "../layouts/AppLayout";

export default function Users() {
  return (
    <AppLayout>
      <Helmet>
        <title>Users - React Tasks</title>
      </Helmet>
      Users
    </AppLayout>
  );
}
