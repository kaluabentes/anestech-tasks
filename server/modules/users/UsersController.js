const UsersService = require("./UsersService");

class UsersController {
  async getAll(req, res) {
    res.json(await UsersService.getAll());
  }

  async getOne(req, res) {
    res.json(await UsersService.getOne(req.params.id));
  }

  async create(req, res) {
    try {
      const user = await UsersService.create(req.body);
      res.json(user);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  async update(req, res) {
    res.json(await UsersService.update(req.params.id, req.body));
  }
}

module.exports = new UsersController();
