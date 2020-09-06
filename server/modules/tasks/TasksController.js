const TasksService = require("./TasksService");

class TasksController {
  async getAll(req, res) {
    res.json(await TasksService.getAll());
  }

  async getOne(req, res) {
    try {
      res.json(await TasksService.getOne(req.params.id));
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async create(req, res) {
    try {
      res.json(await TasksService.create(req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new TasksController();
