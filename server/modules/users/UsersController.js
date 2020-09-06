const UsersService = require("./UsersService");

class UsersController {
  async getAll(req, res) {
    try {
      res.json(await UsersService.getAll());
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  async getOne(req, res) {
    try {
      res.json(await UsersService.getOne(req.params.id));
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
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
    try {
      res.json(await UsersService.update(req.params.id, req.body));
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      res.json(await UsersService.delete(req.params.id));
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }
}

module.exports = new UsersController();
