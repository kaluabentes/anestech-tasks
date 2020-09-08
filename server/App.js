const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");

const PORT = process.env.PORT || 5000;

class App {
  constructor(env) {
    this.server = express();
    this.server.use(helmet());
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(express.static(path.join(__dirname + "/../build")));
    this.env = env;
  }

  addModule(module) {
    this.server.use(module.getRouter());
  }

  configDatabase() {
    mongoose.connect(this.env.MONGODB_URI, {
      auth: {
        authSource: "admin",
      },
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

  configClient() {
    this.server.get("*", (req, res) => {
      res.sendFile(path.join(__dirname + "/../build/index.html"));
    });
  }

  start() {
    this.configDatabase();
    this.configClient();

    this.server.use(function (err, req, res, next) {
      if (err.name === "UnauthorizedError") {
        res.status(401).send({ message: "Unauthorized" });
      }
    });

    this.server.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }
}

module.exports = App;
