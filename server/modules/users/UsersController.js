const UserService = require("./UserService");

class UsersController {
  async getAll(req, res) {
    res.json(await UserService.getAll());
  }

  getOne(req, res) {}
}

module.exports = new UsersController();
