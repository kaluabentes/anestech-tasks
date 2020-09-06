const TasksService = require("./TasksService");

class TasksController {
  async getAll(req, res) {
    try {
      res.json(await TasksService.getAll());
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
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

  async update(req, res) {
    try {
      res.json(await TasksService.update(req.params.id, req.body));
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      res.json(await TasksService.delete(req.params.id));
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new TasksController();
