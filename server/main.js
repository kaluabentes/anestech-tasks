const App = require("./App");

const UsersModule = require("./modules/users/UsersModule");
const TasksModule = require("./modules/tasks/TasksModule");
const AuthModule = require("./modules/auth/AuthModule");

require("dotenv").config();

function main() {
  const app = new App(process.env);
  app.addModule(new UsersModule());
  app.addModule(new TasksModule());
  app.addModule(new AuthModule());
  app.start();
}

main();
