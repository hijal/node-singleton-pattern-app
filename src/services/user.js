const BaseService = require("./base.js");

class UserService extends BaseService {
  async login(email, password) {
    let user = await this.User.findOne({
      where: {
        email,
        password,
      },
    });
    if (!user) {
      this.responseHandler.error({ message: "Wrong credentials" }, "Login Fail", 404);
      return this.responseHandler;
    }
    this.responseHandler.success(user, "Login successfully");
    return this.responseHandler;
  }
  async register(name, email, password) {
    let user = await this.User.create({
      name,
      email,
      password,
    });
    this.responseHandler.success(user, "Register successfully", 201);
    return this.responseHandler;
  }
}

module.exports = UserService;
