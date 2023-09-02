const HTTP_ERRORS_MSG = require('./httpErrorsList');

const HttpError = (status, message = HTTP_ERRORS_MSG[status]) => {
  const error = new Error(message);
  error.status = status;

  return error;
};

module.exports = HttpError;
