const bcrypt = require("bcrypt");
const User = require("./User");
const Joi = require("joi");

class UsersService {
  getAll() {
    return User.find({}).select("-password").exec();
  }

  getOne(id) {
    return User.findById(id).select("-password").exec();
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

    await schema.validateAsync(body);

    if (await this.emailExists(body.email)) {
      throw new Error("Email already in use");
    }

    const user = await User.create({
      name: body.name,
      email: body.email,
      password: await bcrypt.hash(body.password, 10),
    });

    return {
      _id: user._id,
      name: user.name,
      email: user.email,
    };
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

    const nextUser = await user.save();

    return {
      _id: nextUser._id,
      name: nextUser.name,
      email: nextUser.email,
    };
  }

  async delete(id) {
    return User.deleteOne({ _id: id });
  }
}

module.exports = new UsersService();
