import React from "react";
import { Helmet } from "react-helmet-async";

import AppLayout from "../layouts/AppLayout";
import PageTitle from "../components/PageTitle";
import useTasks from "../hooks/useTasks";
import TaskCard from "../components/TaskCard";
import formatDate from "../utils/formatDate";
import EmptyState from "../components/EmptyState";

export default function Home() {
  const tasks = useTasks();
  const pendingTasks = tasks.filter((task) => !task.endDate);

  return (
    <AppLayout>
      <Helmet>
        <title>Home - React Tasks</title>
      </Helmet>
      <PageTitle>Em andamento</PageTitle>
      {!pendingTasks.length ? (
        <EmptyState>Não há tarefas pendentes :)</EmptyState>
      ) : (
        <TaskCard.Grid>
          {pendingTasks.map((task) => (
            <TaskCard
              key={task._id}
              description={task.description}
              startDate={`Iniciada em ${formatDate(task.startDate)}`}
              user={`Por ${task.user.name}`}
            />
          ))}
        </TaskCard.Grid>
      )}
    </AppLayout>
  );
}
