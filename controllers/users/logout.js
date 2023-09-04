const { modelUser } = require('../../models');

const logout = async (req, res) => {
  const { _id: owner } = req.user;

  await modelUser.User.findByIdAndUpdate(owner, { token: '' }, { new: true });

  res.status(204).json({
    message: 'No conect',
  });
};

module.exports = logout;
