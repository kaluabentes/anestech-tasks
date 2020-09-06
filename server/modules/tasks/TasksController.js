const TasksService = require("./TasksService");

class TasksController {
  async getAll(req, res) {
    res.json(await TasksService.getAll());
  }
}

module.exports = new TasksController();
