function UserController(userService) {
  return {
    async login(req, res, next) {
      let user = await userService.login(req.body.email, req.body.password);
      res.status(200).json(user);
    },
    async register(req, res, next) {
      let user = await userService.register(req.body.name, req.body.email, req.body.password);
      res.status(201).json(user);
    },
  };
}

module.exports = UserController;
