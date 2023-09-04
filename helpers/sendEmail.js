const nodemailer = require('nodemailer');
require('dotenv').config();

const { META_PASSWORD, META_LOGIN } = process.env;

const sendEmail = async data => {
  const config = {
    host: 'smtp.meta.ua',
    port: 465,
    secure: true,
    auth: {
      user: META_LOGIN,
      pass: META_PASSWORD,
    },
  };

  const transport = nodemailer.createTransport(config);

  const email = { from: META_LOGIN, ...data };
  await transport.sendMail(email);

  return true;
};

module.exports = sendEmail;
