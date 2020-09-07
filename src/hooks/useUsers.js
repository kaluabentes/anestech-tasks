import { useState, useEffect } from "react";
import { useUser } from "../contexts/user";
import UsersApi from "../services/UsersApi";
import { useNotification } from "../contexts/notification";

export default function useUsers() {
  const [users, setUsers] = useState([]);
  const [user] = useUser();
  const usersApi = new UsersApi(user.token);
  const [, dispatchNotification] = useNotification();

  useEffect(() => {
    async function fetchUsers() {
      try {
        const { data } = await usersApi.getAll();
        setUsers(data);
      } catch (error) {
        dispatchNotification({
          message: error.message,
          isOpen: true,
        });
      }
    }

    if (user.ready) {
      fetchUsers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.ready]);

  return users;
}
