const jwt = require('jsonwebtoken');

const { modelUser } = require('../models');

const { HttpError } = require('../helpers');

const { SECRET_KEY } = process.env;

const autheticate = async (req, res, next) => {
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(' ');

  if (bearer !== 'Bearer' || !token) next(HttpError(401, 'Not authorized'));

  try {
    const { id } = jwt.verify(token, SECRET_KEY);

    const user = await modelUser.User.findById(id);

    if (!user || !user.token || user.token !== token)
      next(HttpError(401, 'Not authorized'));

    req.user = user;

    next();
  } catch (error) {
    console.log('Error:', error.message);
    next(HttpError(401, 'Not authorized'));
  }
};

module.exports = autheticate;
