const { HttpError } = require('../../helpers');
const { modelContact } = require('../../models');

const getFavorite = async (req, res) => {
  const { _id: owner } = req.user;
  const { favorite = true } = req.query;

  console.log(favorite);

  const result = await modelContact.Contact.find({ owner, favorite: true });

  if (result.length === 0) {
    throw HttpError(404);
  }

  console.log(`Find ${result.length} contacts in your list`);

  res.json(result);
};

module.exports = getFavorite;
