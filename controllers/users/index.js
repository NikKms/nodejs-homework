const register = require('./register');
const login = require('./login');

const { controlWrapper } = require('../../helpers');

const ctrlUsers = {
  register: controlWrapper(register),
  login: controlWrapper(login),
};

module.exports = ctrlUsers;
