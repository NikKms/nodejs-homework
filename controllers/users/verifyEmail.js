const { HttpError } = require('../../helpers');
const { modelUser } = require('../../models');

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;

  const user = await modelUser.User.findOne({ verificationToken });
  if (!user) throw HttpError(404, 'User not found');

  await modelUser.User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: '',
  });

  res.status(200).json({ message: 'Verification successful' });
};

module.exports = verifyEmail;
