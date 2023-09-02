const register = require('./register');
const login = require('./login');
const getCurrent = require('./getCurrent');
const logout = require('./logout');
const updtSubscription = require('./updtSubscription');

const { controlWrapper } = require('../../helpers');

const ctrlUsers = {
  register: controlWrapper(register),
  login: controlWrapper(login),
  getCurrent: controlWrapper(getCurrent),
  logout: controlWrapper(logout),
  updtSubscription: controlWrapper(updtSubscription),
};

module.exports = ctrlUsers;
