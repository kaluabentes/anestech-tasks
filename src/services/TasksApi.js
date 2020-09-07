import api from "./api";

export default class TasksApi {
  constructor(token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  getAll() {
    return api.get("/api/v1/tasks");
  }

  getOne(id) {
    return api.get(`/api/v1/tasks/${id}`);
  }

  delete(id) {
    return api.delete(`/api/v1/tasks/${id}`);
  }

  create(body) {
    return api.post("/api/v1/tasks", body);
  }

  update(id, body) {
    return api.patch(`/api/v1/tasks/${id}`, body);
  }
}
