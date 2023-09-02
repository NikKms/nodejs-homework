const bcrypt = require('bcrypt');
const gravatar = require('gravatar');

const { HttpError } = require('../../helpers');
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

  const newUser = await modelUser.User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
  });

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
