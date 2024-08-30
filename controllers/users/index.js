const userHttpCode = require('./users_http_code')
const utils = require('../../helpers/utils')


exports.getUser = (request, response) => {
  utils.writeResponse(userHttpCode.GET_USER_SUCCESSFUL.status, userHttpCode.GET_USER_SUCCESSFUL.message, response, 'Get user')
  response.end();
};

exports.createUser = (request, response) => {
  utils.writeResponse(userHttpCode.USER_CREATED_SUCCESSFUL.status, userHttpCode.USER_CREATED_SUCCESSFUL.message, response, 'Create user')
  response.end();
};


exports.updateUser = (request, response) => {
  utils.writeResponse(userHttpCode.UPDATE_USER_SUCCESSFUL.status, userHttpCode.UPDATE_USER_SUCCESSFUL.message, 'Update user')
  response.end();
}

exports.deleteUser = (request, response) => {
  utils.writeResponse(userHttpCode.DELETE_USER_SUCCESSFUL.status, userHttpCode.DELETE_USER_SUCCESSFUL.message, response, 'Delete user')
  response.end();
}