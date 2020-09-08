import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import Modal from "../Modal";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";
import { Form, Actions, Title } from "./styles";
import useUsers from "../../hooks/useUsers";
import formatDateTimeInput from "../../utils/formatDateTimeInput";

const INITIAL_STATE = {
  description: "",
  user: "",
  startDate: "",
  endDate: "",
};

const propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  initialTask: PropTypes.shape({
    description: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
  }),
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

const defaultProps = {
  initialTask: undefined,
};

export default function TaskModal({
  title,
  isOpen,
  isLoading,
  initialTask,
  onCancel,
  onSave,
}) {
  const [task, setTask] = useState(INITIAL_STATE);
  const formRef = useRef();
  const users = useUsers();

  useEffect(() => {
    if (initialTask) {
      setTask({
        ...initialTask,
        startDate: formatDateTimeInput(initialTask.startDate),
        endDate: initialTask.endDate
          ? formatDateTimeInput(initialTask.startDate)
          : "",
      });
    } else {
      setTask(INITIAL_STATE);
    }
  }, [initialTask]);

  function handleChange(event) {
    const { name, value } = event.target;

    setTask({
      ...task,
      [name]: value,
    });
  }

  function handleSave() {
    if (!formRef.current.checkValidity()) {
      formRef.current.reportValidity();
      return;
    }

    onSave(task);
    setTask(INITIAL_STATE);
  }

  function handleCancel() {
    setTask(INITIAL_STATE);
    onCancel();
  }

  return (
    <Modal isOpen={isOpen}>
      <Form ref={formRef}>
        <Title>{title}</Title>
        <Input.Label htmlFor="description">Descrição</Input.Label>
        <Input
          id="description"
          name="description"
          placeholder="Descrição"
          value={task.description}
          onChange={handleChange}
          required
          margin="0 0 20px 0"
        />
        <Input.Label htmlFor="user">Usuário</Input.Label>
        <Select
          id="user"
          placeholder="Usuário"
          name="user"
          value={task.user}
          onChange={handleChange}
          required
          margin="0 0 20px 0"
        >
          <option value="">Selecione</option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name}
            </option>
          ))}
        </Select>
        <Input.Label htmlFor="startDate">Data de início</Input.Label>
        <Input
          id="startDate"
          placeholder="Data de início"
          name="startDate"
          type="datetime-local"
          value={task.startDate}
          onChange={handleChange}
          required
          margin="0 0 20px 0"
        />
        <Input.Label htmlFor="endDate">Data de conclusão</Input.Label>
        <Input
          id="endDate"
          placeholder="Data de conclusão"
          name="endDate"
          type="datetime-local"
          value={task.endDate}
          onChange={handleChange}
          margin="0 0 20px 0"
        />
        <Actions>
          <Button variant="secondary" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button isLoading={isLoading} variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Actions>
      </Form>
    </Modal>
  );
}

TaskModal.propTypes = propTypes;
TaskModal.defaultProps = defaultProps;
