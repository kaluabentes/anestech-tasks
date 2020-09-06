const Task = require("./Task");

class TasksService {
  getAll() {
    return Task.find({});
  }
}

module.exports = new TasksService();
