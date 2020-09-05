const Module = require("../../core/Module");
const UsersController = require("./UsersController");

class UsersModule extends Module {
  constructor() {
    super();

    this.router.get("/api/v1/users", UsersController.getAll);
  }
}

module.exports = UsersModule;
