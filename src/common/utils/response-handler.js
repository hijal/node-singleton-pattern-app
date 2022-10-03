class ResponseHandler {
  constructor() {
    this.status = "success";
    this.payload = null;
    this.message = "";
    this.errors = null;
    this.statusCode = 200;
  }
  success(data, message, statusCode = 200) {
    this.success = "success";
    this.payload = data;
    this.message = message;
    this.statusCode = statusCode;
  }
  error(errors, message, statusCode = 500) {
    this.status = "error";
    this.errors = errors;
    this.message = message;
    this.statusCode = statusCode;
  }
}

module.exports = ResponseHandler;