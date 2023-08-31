const controlWrapper = ctrl => {
  const func = async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      console.log('Error:', error.message);

      next(error);
    }
  };

  return func;
};

module.exports = controlWrapper;
