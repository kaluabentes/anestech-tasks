const Task = require("./Task");

class TasksService {
  getAll() {
    return Task.find({});
  }

  getOne(id) {
    return Task.findById(id);
  }
}

module.exports = new TasksService();
