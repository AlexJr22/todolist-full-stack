const userService = require('../services/userService');

const registerNewUser = async ({ body }, response) => {
  const serviceResponse = await userService.registerNewUser(body);
  return response.status(201).json(serviceResponse);
};

module.exports = {
  registerNewUser,
};