const register = require('./register');
const verifyEmail = require('./verifyEmail');
const resendVerify = require('./resendVerify');
const login = require('./login');
const getCurrent = require('./getCurrent');
const logout = require('./logout');
const updtSubscription = require('./updtSubscription');
const updateAvatar = require('./updateAvatar');

const { controlWrapper } = require('../../helpers');

const ctrlUsers = {
  register: controlWrapper(register),
  verifyEmail: controlWrapper(verifyEmail),
  resendVerify: controlWrapper(resendVerify),
  login: controlWrapper(login),
  getCurrent: controlWrapper(getCurrent),
  logout: controlWrapper(logout),
  updtSubscription: controlWrapper(updtSubscription),
  updateAvatar: controlWrapper(updateAvatar),
};

module.exports = ctrlUsers;
