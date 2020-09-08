import { useState, useEffect } from "react";
import { useUser } from "../contexts/user";
import TasksApi from "../services/TasksApi";
import { useNotification } from "../contexts/notification";

export default function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [user] = useUser();
  const tasksApi = new TasksApi(user.token);
  const [, dispatchNotification] = useNotification();

  useEffect(() => {
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

    if (user.ready) {
      fetchTasks();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.ready]);

  return tasks;
}
