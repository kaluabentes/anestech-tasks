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

  async emailExists(email) {
    const result = await User.find({ email });
    return result.length;
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

    if (await this.emailExists(body.email)) {
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

    if (body.email !== user.email) {
      if (await this.emailExists(body.email)) {
        throw new Error("Email already in use");
      }

      user.email = body.email;
    }

    user.name = body.name || user.name;
    user.password = body.password
      ? await bcrypt.hash(body.password, 10)
      : user.password;
    return user.save();
  }

  async delete(id) {
    return User.deleteOne({ _id: id });
  }
}

module.exports = new UsersService();
