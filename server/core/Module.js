const express = require("express");

class Module {
  constructor(options) {
    this.router = express();

    if (options && options.middleware) {
      this.middleware = options.middleware;
    }
  }

  addRoute(verb, path, method) {
    if (this.middleware) {
      this.router.use(path, ...this.middleware);
    }

    this.router[verb](path, method);
  }

  getRouter() {
    return this.router;
  }
}

module.exports = Module;
