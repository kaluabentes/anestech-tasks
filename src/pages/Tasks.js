import React from "react";
import { Helmet } from "react-helmet";

import AppLayout from "../layouts/AppLayout";

export default function Tasks() {
  return (
    <AppLayout>
      <Helmet>
        <title>Tasks - React Tasks</title>
      </Helmet>
      Tasks
    </AppLayout>
  );
}
