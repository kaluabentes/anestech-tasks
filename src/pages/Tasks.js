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
import TaskModal from "../components/TaskModal";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";

export default function Tasks() {
  const [user] = useUser();
  const tasksApi = new TasksApi(user.token);
  const [tasks, setTasks] = useState([]);
  const [, dispatchNotification] = useNotification();
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [currentTask, setCurrentTask] = useState(undefined);

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

  async function deleteTask(id) {
    // eslint-disable-next-line no-restricted-globals
    if (!confirm("Você tem certeza?")) {
      return;
    }

    try {
      await tasksApi.delete(id);
      fetchTasks();
    } catch (error) {
      dispatchNotification({
        message: error.message,
        isOpen: true,
      });
    }
  }

  function closeTaskModal() {
    setIsTaskModalOpen(false);
  }

  async function createTask(body) {
    setIsSaving(true);

    try {
      const preparedBody = { ...body, endDate: body.endDate || undefined };
      await tasksApi.create(preparedBody);
      fetchTasks();
      dispatchNotification({
        message: "Task criada com sucesso",
        isOpen: true,
      });
      setIsTaskModalOpen(false);
    } catch (error) {
      if (error.response.data) {
        dispatchNotification({
          message: error.response.data.message,
          isOpen: true,
        });
        return;
      }

      dispatchNotification({
        message: error.message,
        isOpen: true,
      });
    } finally {
      setIsSaving(false);
    }
  }

  function updateTask(body) {}

  return (
    <AppLayout>
      <Helmet>
        <title>Tasks - React Tasks</title>
      </Helmet>
      <PageHeader
        actions={
          <Button
            variant="primary"
            isInline
            onClick={() => setIsTaskModalOpen(true)}
          >
            Adicionar
          </Button>
        }
      >
        <PageTitle>Tasks</PageTitle>
      </PageHeader>
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
            <Table.Data>
              {task.endDate ? formatDate(task.endDate) : null}
            </Table.Data>
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
      <TaskModal
        isOpen={isTaskModalOpen}
        isLoading={isSaving}
        initialTask={currentTask}
        title="Adicionar task"
        onCancel={closeTaskModal}
        onSave={currentTask ? updateTask : createTask}
      />
    </AppLayout>
  );
}
