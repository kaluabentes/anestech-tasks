const Module = require("../../core/Module");
const TasksController = require("./TasksController");

class TasksModule extends Module {
  constructor() {
    super();

    this.addRoute("get", "/api/v1/tasks", TasksController.getAll);
    this.addRoute("get", "/api/v1/tasks/:id", TasksController.getOne);
    this.addRoute("post", "/api/v1/tasks", TasksController.create);
  }
}

module.exports = TasksModule;
