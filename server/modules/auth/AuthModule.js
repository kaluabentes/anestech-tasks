const Module = require("../../core/Module");
const AuthController = require("./AuthController");

class AuthModule extends Module {
  constructor(options) {
    super(options);

    this.addRoute("post", "/api/v1/auth/login", AuthController.login);
  }
}

module.exports = AuthModule;
