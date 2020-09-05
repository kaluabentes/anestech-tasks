const express = require("express");

class App {
  constructor() {
    this.server = express();
  }

  addModule(module) {
    this.server.use(module.getRouter());
  }

  start() {
    this.server.listen(3333, () => {
      console.log("Server running on http://localhost:3333");
    });
  }
}

module.exports = App;
