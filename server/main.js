const App = require("./App");
const expressJwt = require("express-jwt");

const UsersModule = require("./modules/users/UsersModule");
const TasksModule = require("./modules/tasks/TasksModule");
const AuthModule = require("./modules/auth/AuthModule");

require("dotenv").config();

function main() {
  const jwt = expressJwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
  });
  const app = new App(process.env);
  app.addModule(new UsersModule({ middleware: [jwt] }));
  app.addModule(new TasksModule({ middleware: [jwt] }));
  app.addModule(new AuthModule());
  app.start();
}

main();
