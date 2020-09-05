class UsersController {
  getAll(req, res) {
    res.json({ message: "ok" });
  }
}

module.exports = new UsersController();
