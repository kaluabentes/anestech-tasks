const App = require("./App");

const UsersModule = require("./modules/users/UsersModule");

function main() {
  const app = new App();
  app.addModule(new UsersModule());
  app.start();
}

main();
