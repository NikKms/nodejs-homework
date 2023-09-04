const { HttpError } = require('../../helpers');
const { modelUser } = require('../../models');

require('dotenv').config();

const { BASE_URL } = process.env;

const resendVerify = async (req, res) => {
  const { email } = req.body;

  const user = await modelUser.User.findOne({ email });
  if (!user) throw HttpError(404, 'Email not found');

  if (user.verify) throw HttpError(400, 'Verification has already been passed');

  const verifyLink = `${BASE_URL}/api/users/verify/${user.verificationToken}`;

  const verifyConfirmMail = {
    to: email,
    subject: 'Verify your email',
    html: `<a href="${verifyLink}" target='_blank'>Click for verify</a>`,
  };

  await sendEmail(verifyConfirmMail);

  res.status(200).json({ message: 'Verification email sent' });
};

module.exports = resendVerify;
