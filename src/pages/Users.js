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
import { useNotification } from "../contexts/notification";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [user] = useUser();
  const usersApi = new UsersApi(user.token);
  const [isSaving, setIsSaving] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [, dispatchNotification] = useNotification();

  useEffect(() => {
    if (user.ready) {
      fetchUsers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.ready]);

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
      dispatchNotification({
        message: "Usuário deletado com sucesso",
        isOpen: true,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  async function createUser(user) {
    setIsSaving(true);

    try {
      await usersApi.create(user);
      fetchUsers();
      dispatchNotification({
        message: "Usuário criado com sucesso",
        isOpen: true,
      });
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
      dispatchNotification({
        message: "Usuário atualizado com sucesso",
        isOpen: true,
      });
      setCurrentUser(undefined);
      setIsUserModalOpen(false);
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
    </AppLayout>
  );
}
