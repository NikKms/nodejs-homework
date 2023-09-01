const { modelUser } = require('../../models');

const logout = async (req, res) => {
  const { _id } = req.user;

  await modelUser.User.findByIdAndUpdate(_id, { token: null });

  res.status(204).json({
    message: 'No conect',
  });
};

module.exports = logout;
