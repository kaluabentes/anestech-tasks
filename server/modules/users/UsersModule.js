const Module = require("../../core/Module");
const UsersController = require("./UsersController");

class UsersModule extends Module {
  constructor() {
    super();

    this.addRoute("get", "/api/v1/users", UsersController.getAll);
    this.addRoute("get", "/api/v1/users/:id", UsersController.getOne);
    this.addRoute("post", "/api/v1/users", UsersController.create);
    this.addRoute("patch", "/api/v1/users/:id", UsersController.update);
  }
}

module.exports = UsersModule;
