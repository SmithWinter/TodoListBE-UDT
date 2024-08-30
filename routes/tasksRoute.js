const controller = require('../controllers');

module.exports = {
  GET:    controller.tasks.getTask,
  POST:   controller.tasks.createTask,
  PUT:    controller.tasks.updateTask,
  DELETE: controller.tasks.updateTask,
};

