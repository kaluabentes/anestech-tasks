const Joi = require("joi");
const Task = require("./Task");

class TasksService {
  getAll() {
    return Task.find({}).populate("user", "name");
  }

  getOne(id) {
    return Task.findById(id).populate("user", "name");
  }

  async create(body) {
    const schema = Joi.object({
      description: Joi.string().required(),
      user: Joi.string().required(),
      startDate: Joi.string().required(),
      endDate: Joi.string(),
    });

    try {
      await schema.validateAsync(body);
    } catch (error) {
      throw new Error(error.message);
    }

    return Task.create({
      description: body.description,
      user: body.user,
      startDate: new Date(body.startDate),
      endDate: body.endDate ? new Date(body.endDate) : null,
    });
  }

  async update(id, body) {
    const task = await Task.findById(id);
    task.description = body.description || task.description;
    task.user = body.user || task.user;
    task.startDate = body.startDate ? new Date(body.startDate) : task.startDate;
    task.endDate = body.endDate ? new Date(body.endDate) : task.endDate;
    return task.save();
  }

  delete(id) {
    return Task.deleteOne({ _id: id });
  }
}

module.exports = new TasksService();
