const Module = require("../../core/Module");
const TasksController = require("./TasksController");

class TasksModule extends Module {
  constructor() {
    super();

    this.addRoute("get", "/api/v1/tasks", TasksController.getAll);
  }
}

module.exports = TasksModule;
