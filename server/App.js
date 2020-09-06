const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");

class App {
  constructor(env) {
    this.server = express();
    this.server.use(helmet());
    this.server.use(express.json());
    this.env = env;
  }

  addModule(module) {
    this.server.use(module.getRouter());
  }

  configDatabase() {
    mongoose.connect(this.env.DB_CONNECTION, {
      auth: {
        authSource: "admin",
      },
      user: this.env.DB_USER,
      pass: this.env.DB_PASS,
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

    this.server.use(function (err, req, res, next) {
      if (err.name === "UnauthorizedError") {
        res.status(401).send({ message: "Unauthorized" });
      }
    });

    this.server.listen(3333, () => {
      console.log("Server running on http://localhost:3333");
    });
  }
}

module.exports = App;
