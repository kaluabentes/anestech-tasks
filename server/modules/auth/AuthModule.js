const Module = require("../../core/Module");
const AuthController = require("./AuthController");

class AuthModule extends Module {
  constructor() {
    super();

    this.addRoute("post", "/api/v1/auth/login", AuthController.login);
  }
}

module.exports = AuthModule;
