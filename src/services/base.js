const ResponseHandler = require("../common/utils/response-handler.js");
const User = require('../database/models').User

class BaseService {
  constructor(db) {
    this.db = db;
    this.User = User;
    this.responseHandler = new ResponseHandler();
  }
}

module.exports = BaseService;
