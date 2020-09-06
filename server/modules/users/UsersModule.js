const Module = require("../../core/Module");
const UsersController = require("./UsersController");

class UsersModule extends Module {
  constructor() {
    super();

    this.router.get("/api/v1/users", UsersController.getAll);
    this.router.get("/api/v1/users/:id", UsersController.getOne);
    this.router.post("/api/v1/users", UsersController.create);
  }
}

module.exports = UsersModule;
