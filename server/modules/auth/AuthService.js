const Joi = require("joi");
const User = require("../users/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UsersService = require("../users/UsersService");

require("dotenv").config();

class AuthService {
  async login(body) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });

    await schema.validateAsync(body);

    const user = await User.findOne({ email: body.email });
    if (!user) {
      throw new Error("User not found, check email");
    }

    const isPasswordValid = await bcrypt.compare(body.password, user.password);
    if (!isPasswordValid) {
      throw new Error("Password invalid");
    }

    const payload = {
      sub: user._id,
      name: user.name,
      email: user.email,
    };

    return {
      token: await jwt.sign(payload, process.env.JWT_SECRET),
      id: user._id,
      name: user.name,
      email: user.email,
    };
  }

  register(body) {
    return UsersService.create(body);
  }
}

module.exports = new AuthService();
