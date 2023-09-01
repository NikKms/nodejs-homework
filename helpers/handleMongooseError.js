const handleMongooseError = (error, data, next) => {
  const { name, code } = error;
  console.log('name err:', name);
  console.log('code err:', code);

  const status = name === 'MongoServerError' && code === 11000 ? 409 : 400;

  error.status = status;

  next();
};

module.exports = handleMongooseError;
