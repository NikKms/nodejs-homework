const { modelContact } = require('../../models');

const { HttpError } = require('../../helpers');

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await modelContact.Contact.findById({ _id: contactId });
  if (!result) {
    throw HttpError(404, 'Not found');
  }

  res.json(result);
};

module.exports = getContactById;
