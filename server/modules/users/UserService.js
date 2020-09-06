const bcrypt = require("bcrypt");
const User = require("./User");
const Joi = require("joi");

class UserService {
  getAll() {
    return User.find({});
  }

  getOne(id) {
    return User.findById(id);
  }

  async create(body) {
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });

    try {
      await schema.validateAsync(body);
    } catch (error) {
      throw new Error(error.message);
    }

    return User.create({
      name: body.name,
      email: body.email,
      password: await bcrypt.hash(body.password, 10),
    });
  }
}

module.exports = new UserService();
