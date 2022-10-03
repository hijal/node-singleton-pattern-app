const userRouter = require("./user.js");

module.exports = (app, context) => {
  app.get("/", (req, res, next) => {
    res.json({
      message: "Singleton example",
    });
  });

  app.use("/users", userRouter(context.userController));
};
