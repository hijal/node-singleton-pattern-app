module.exports = (app) => {
  app.use((err, req, res, next) => {
    let statusCode = err.status || 500;

    res.status(statusCode).json({
      message: "server error",
      statusCode: statusCode,
      hasError: true,
    });
  });
  app.use((req, res, next) => {
    res.status(404).json({
      message: "Not found",
      statusCode: 404,
      hasError: true,
    });
  });
};
