const { HttpError } = require('../../helpers');
const { modelUser } = require('../../models');

const updtSubscription = async (req, res) => {
  const { _id: owner } = req.user;
  const { subscription } = req.body;

  if (!req.body || !req.body.subscription) {
    throw HttpError(400, 'missing field subscription');
  }

  const result = await modelUser.User.findByIdAndUpdate(
    owner,
    {
      subscription,
    },
    { new: true }
  );

  if (!result) throw HttpError(404);

  res.json(result);
};

module.exports = updtSubscription;
