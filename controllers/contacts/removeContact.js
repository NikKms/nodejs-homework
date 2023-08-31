const { modelContact } = require('../../models');

const { HttpError } = require('../../helpers');

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await modelContact.Contact.findByIdAndRemove({
    _id: contactId,
  });
  if (!result) {
    throw HttpError(404, 'Not found');
  }

  res.json({
    message: 'Contact Delete success',
  });
};

module.exports = removeContact;
