import React from "react";
import { Helmet } from "react-helmet";

import AppLayout from "../layouts/AppLayout";
import PageTitle from "../components/PageTitle";
import useTasks from "../hooks/useTasks";
import TaskCard from "../components/TaskCard";
import formatDate from "../utils/formatDate";

export default function Home() {
  const tasks = useTasks();

  return (
    <AppLayout>
      <Helmet>
        <title>Home - React Tasks</title>
      </Helmet>
      <PageTitle>Em andamento</PageTitle>
      <TaskCard.Grid>
        {tasks
          .filter((task) => !task.endDate)
          .map((task) => (
            <TaskCard
              description={task.description}
              startDate={`Iniciada em ${formatDate(task.startDate)}`}
              user={`Por ${task.user.name}`}
            />
          ))}
      </TaskCard.Grid>
    </AppLayout>
  );
}
