const tasksHttpCode= require('./tasks_http_code')
const utils = require('../../helpers/utils')

exports.getTask = (request, response) => {
  utils.writeResponse(tasksHttpCode.GET_TASK_SUCCESSFUL.status, tasksHttpCode.GET_TASK_SUCCESSFUL.message, response, 'Get task')
  response.end();
};

exports.createTask = (request, response) => {
  utils.writeResponse(tasksHttpCode.TASK_CREATED_SUCCESSFUL.status, tasksHttpCode.TASK_CREATED_SUCCESSFUL.message, response, 'Create task')
  response.end();
};

exports.updateTask = (request, response) => {
  utils.writeResponse(tasksHttpCode.UPDATE_TASK_SUCCESSFUL.status, tasksHttpCode.UPDATE_TASK_SUCCESSFUL.message, response, 'Update task')
  response.end();
};

exports.deleteTask = (request, response) => {
  utils.writeResponse(tasksHttpCode.DELETE_TASK_SUCCESSFUL.status, tasksHttpCode.DELETE_TASK_SUCCESSFUL.message, response, 'Delete task')
  response.end();
};