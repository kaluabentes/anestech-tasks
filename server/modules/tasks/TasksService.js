const Task = require("./Task");
const Joi = require("joi");

class TasksService {
  getAll() {
    return Task.find({}).populate("user");
  }

  getOne(id) {
    return Task.findById(id);
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
}

module.exports = new TasksService();
