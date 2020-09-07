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

export default function Users() {
  const [users, setUsers] = useState([]);
  const [user] = useUser();

  useEffect(() => {
    const usersApi = new UsersApi(user.token);

    async function fetchUsers() {
      try {
        const { data } = await usersApi.getAll();
        setUsers(data);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchUsers();
  }, [user.token]);

  return (
    <AppLayout>
      <Helmet>
        <title>Users - React Tasks</title>
      </Helmet>
      <PageHeader actions={<Button isInline>Adicionar</Button>}>
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
              <ActionButton icon="edit" onClick={() => alert("edit")} />
              <ActionButton icon="delete" onClick={() => alert("delete")} />
            </Table.Data>
          </Table.Row>
        ))}
      </Table>
    </AppLayout>
  );
}
