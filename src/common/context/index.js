const db = require('../../database/models');
const UserService = require("../../services/user.js");
const UserController = require("../../controllers/user.js");

const userService = new UserService(db);
const userController = UserController(userService);

module.exports = {
  userController,
};
