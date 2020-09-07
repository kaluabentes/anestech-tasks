import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import AppLayout from "../layouts/AppLayout";
import PageTitle from "../components/PageTitle";
import PageHeader from "../components/PageHeader";
import UsersApi from "../services/UsersApi";
import Table from "../components/Table";
import ActionButton from "../components/ActionButton";
import { useUser } from "../contexts/user";
import Button from "../components/Button";
import UserModal from "../components/UserModal";
import Notification from "../components/Notification";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [user] = useUser();
  const usersApi = new UsersApi(user.token);
  const [isSaving, setIsSaving] = useState(false);
  const [notification, setNotification] = useState("");
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.token]);

  async function fetchUsers() {
    try {
      const { data } = await usersApi.getAll();
      setUsers(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function deleteUser(id) {
    // eslint-disable-next-line no-restricted-globals
    if (!confirm("Você tem certeza?")) {
      return;
    }

    try {
      await usersApi.delete(id);
      fetchUsers();
      setNotification("Usuário deletado com sucesso");
      setIsNotificationOpen(true);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function createUser(user) {
    setIsSaving(true);

    try {
      await usersApi.create(user);
      fetchUsers();
      setNotification("Usuário criado com sucesso");
      setIsUserModalOpen(false);
    } catch (error) {
      if (error.response.data) {
        setNotification(error.response.data.message);
        return;
      }

      setNotification(error.message);
    } finally {
      setIsSaving(false);
      setIsNotificationOpen(true);
    }
  }

  async function editUser(id) {
    try {
      const { data } = await usersApi.getOne(id);
      setCurrentUser(data);
      setIsUserModalOpen(true);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function updateUser(body) {
    setIsSaving(true);

    try {
      await usersApi.update(currentUser._id, body);
      fetchUsers();
      setNotification("Usuário atualizado com sucesso");
      setCurrentUser(undefined);
      setIsUserModalOpen(false);
    } catch (error) {
      if (error.response.data) {
        setNotification(error.response.data.message);
        return;
      }

      console.log(error.message);
    } finally {
      setIsSaving(false);
      setIsNotificationOpen(true);
    }
  }

  function closeUserModal() {
    setIsUserModalOpen(false);
    setCurrentUser(undefined);
  }

  return (
    <AppLayout>
      <Helmet>
        <title>Users - React Tasks</title>
      </Helmet>
      <PageHeader
        actions={
          <Button
            variant="primary"
            isInline
            onClick={() => setIsUserModalOpen(true)}
          >
            Adicionar
          </Button>
        }
      >
        <PageTitle>Users</PageTitle>
      </PageHeader>
      <Table>
        <Table.Row>
          <Table.Head>Name</Table.Head>
          <Table.Head>Email</Table.Head>
          <Table.Head width="10%">Ações</Table.Head>
        </Table.Row>
        {users.map((user) => (
          <Table.Row>
            <Table.Data>{user.name}</Table.Data>
            <Table.Data>{user.email}</Table.Data>
            <Table.Data>
              <ActionButton icon="edit" onClick={() => editUser(user._id)} />
              <ActionButton
                icon="delete"
                onClick={() => deleteUser(user._id)}
              />
            </Table.Data>
          </Table.Row>
        ))}
      </Table>
      <UserModal
        isOpen={isUserModalOpen}
        isLoading={isSaving}
        initialUser={currentUser}
        title="Adicionar usuário"
        onCancel={closeUserModal}
        onSave={currentUser ? updateUser : createUser}
      />
      <Notification
        isOpen={isNotificationOpen}
        message={notification}
        onClose={() => setIsNotificationOpen(false)}
      />
    </AppLayout>
  );
}
