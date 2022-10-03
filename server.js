require("dotenv").config();

const express = require("express");

const appConfig = require("./src/config/app");
const appErrorHandlers = require("./src/config/error-handlers");
const routerConfig = require("./src/routes");
const context = require("./src/common/context");

const app = express();

appConfig(app, express);
routerConfig(app, context);
appErrorHandlers(app);

module.exports = app;
