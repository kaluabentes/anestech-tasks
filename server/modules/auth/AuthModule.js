const Module = require("../../core/Module");
const AuthController = require("./AuthController");

class AuthModule extends Module {
  constructor(options) {
    super(options);

    this.addRoute("post", "/api/v1/auth/login", AuthController.login);
    this.addRoute("post", "/api/v1/auth/register", AuthController.register);
  }
}

module.exports = AuthModule;
