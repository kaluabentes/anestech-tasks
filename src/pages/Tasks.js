import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import AppLayout from "../layouts/AppLayout";
import PageTitle from "../components/PageTitle";
import { useUser } from "../contexts/user";
import TasksApi from "../services/TasksApi";
import { useNotification } from "../contexts/notification";
import Table from "../components/Table";
import ActionButton from "../components/ActionButton";
import formatDate from "../utils/formatDate";

export default function Tasks() {
  const [user] = useUser();
  const tasksApi = new TasksApi(user.token);
  const [tasks, setTasks] = useState([]);
  const [, dispatchNotification] = useNotification();

  useEffect(() => {
    if (user.ready) {
      fetchTasks();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.ready]);

  async function fetchTasks() {
    try {
      const { data } = await tasksApi.getAll();
      setTasks(data);
    } catch (error) {
      dispatchNotification({
        message: error.message,
        isOpen: true,
      });
    }
  }

  function editTask(id) {
    alert(id);
  }

  function deleteTask(id) {
    alert(id);
  }

  return (
    <AppLayout>
      <Helmet>
        <title>Tasks - React Tasks</title>
      </Helmet>
      <PageTitle>Tasks</PageTitle>
      <Table>
        <Table.Row>
          <Table.Head>Descrição</Table.Head>
          <Table.Head>Usuário</Table.Head>
          <Table.Head>Data de início</Table.Head>
          <Table.Head>Data de conclusão</Table.Head>
          <Table.Head width="10%">Ações</Table.Head>
        </Table.Row>
        {tasks.map((task) => (
          <Table.Row>
            <Table.Data>{task.description}</Table.Data>
            <Table.Data>{task.user.name}</Table.Data>
            <Table.Data>{formatDate(task.startDate)}</Table.Data>
            <Table.Data>{formatDate(task.endDate)}</Table.Data>
            <Table.Data>
              <ActionButton icon="edit" onClick={() => editTask(task._id)} />
              <ActionButton
                icon="delete"
                onClick={() => deleteTask(task._id)}
              />
            </Table.Data>
          </Table.Row>
        ))}
      </Table>
    </AppLayout>
  );
}
