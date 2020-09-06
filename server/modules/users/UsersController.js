const UserService = require("./UserService");

class UsersController {
  async getAll(req, res) {
    res.json(await UserService.getAll());
  }

  getOne(req, res) {}

  async create(req, res) {
    try {
      const user = await UserService.create(req.body);
      res.json(user);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}

module.exports = new UsersController();
