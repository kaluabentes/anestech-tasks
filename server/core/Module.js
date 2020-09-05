const express = require("express");

class Module {
  constructor() {
    this.router = express();
  }

  addRoute(verb, path, method) {
    this.router[verb](path, method);
  }

  getRouter() {
    return this.router;
  }
}

module.exports = Module;
