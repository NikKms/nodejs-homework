const bcrypt = require('bcrypt');
const gravatar = require('gravatar');
const { nanoid } = require('nanoid');

require('dotenv').config();

const { BASE_URL } = process.env;

const { HttpError, sendEmail } = require('../../helpers');
const { modelUser } = require('../../models');

const register = async (req, res) => {
  const { email, password } = req.body;

  const user = await modelUser.User.findOne({ email });

  if (user) {
    console.log(
      `Sorry, ${email} address is already registered. Please try using a different email address.`
    );
    throw HttpError(409, 'Email in use');
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();
  const verifyLink = `${BASE_URL}/api/users/verify/${verificationToken}`;

  const newUser = await modelUser.User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });

  const verifyConfirmMail = {
    to: email,
    subject: 'Verify your email',
    html: `<a href="${verifyLink}" target='_blank'>Click for verify</a>`,
  };

  await sendEmail(verifyConfirmMail);

  const { subscription } = newUser;

  console.log(`User ${email} register succes👌`);

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: subscription,
    },
  });
};

module.exports = register;
