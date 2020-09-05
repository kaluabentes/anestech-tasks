const express = require("express");
const mongoose = require("mongoose");

class App {
  constructor(env) {
    this.server = express();
    this.env = env;
  }

  addModule(module) {
    this.server.use(module.getRouter());
  }

  configDatabase() {
    mongoose.connect(this.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    mongoose.connection.on("error", (error) => {
      console.error(`Connection error: ${error}`);
    });

    mongoose.connection.once("open", (error) => {
      console.log(`Database successfully connected`);
    });
  }

  start() {
    this.configDatabase();

    this.server.listen(3333, () => {
      console.log("Server running on http://localhost:3333");
    });
  }
}

module.exports = App;
