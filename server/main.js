const App = require("./App");

const UsersModule = require("./modules/users/UsersModule");

require("dotenv").config();

function main() {
  const app = new App(process.env);
  app.addModule(new UsersModule());
  app.start();
}

main();
