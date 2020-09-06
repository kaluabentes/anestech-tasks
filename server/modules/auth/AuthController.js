const AuthService = require("./AuthService");

class AuthController {
  async login(req, res) {
    try {
      res.json(await AuthService.login(req.body));
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  async register(req, res) {
    try {
      res.json(await AuthService.register(req.body));
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}

module.exports = new AuthController();
