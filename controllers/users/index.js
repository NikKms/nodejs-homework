const register = require('./register');
const login = require('./login');
const getCurrent = require('./getCurrent');
const logout = require('./logout');
const updtSubscription = require('./updtSubscription');
const updateAvatar = require('./updateAvatar');

const { controlWrapper } = require('../../helpers');

const ctrlUsers = {
  register: controlWrapper(register),
  login: controlWrapper(login),
  getCurrent: controlWrapper(getCurrent),
  logout: controlWrapper(logout),
  updtSubscription: controlWrapper(updtSubscription),
  updateAvatar: controlWrapper(updateAvatar),
};

module.exports = ctrlUsers;
