const bcrypt = require("bcrypt");
const User = require("./User");
const Joi = require("joi");

class UsersService {
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

    const emailExists = await User.find({ email: body.email });
    if (emailExists) {
      throw new Error("Email already in use");
    }

    return User.create({
      name: body.name,
      email: body.email,
      password: await bcrypt.hash(body.password, 10),
    });
  }

  async update(id, body) {
    const user = await User.findById(id);
    user.name = body.name || user.name;
    user.email = body.email || user.email;
    user.password = body.password
      ? await bcrypt.hash(body.password, 10)
      : user.password;
    return user.save();
  }
}

module.exports = new UsersService();
