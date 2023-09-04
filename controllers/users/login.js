const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { HttpError } = require('../../helpers');
const { modelUser } = require('../../models');

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await modelUser.User.findOne({ email });

  if (!user) throw HttpError(401, 'Email or password is wrong');

  if (!user.verify) throw HttpError(401, 'Email or password is wrong');

  const passwordCompare = bcrypt.compare(password, user.password);
  if (!passwordCompare) throw HttpError(401, 'Email or password is wrong');

  const { subscription } = user;

  const payload = { id: user._id };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' });
  await modelUser.User.findByIdAndUpdate(user._id, { token }, { new: true });

  console.log(`User ${email} login succes👌`);

  res.json({
    token,
    user: {
      email,
      subscription,
    },
  });
};

module.exports = login;
