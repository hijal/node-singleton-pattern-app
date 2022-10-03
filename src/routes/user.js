const express = require("express");
const router = express.Router();

module.exports = (userController) => {
  router.post("/login", userController.login);
  router.post("/register", userController.register);
  return router;
};
