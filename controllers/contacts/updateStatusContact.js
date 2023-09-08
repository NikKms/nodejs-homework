const { modelContact } = require('../../models');

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;

  const result = await modelContact.Contact.findByIdAndUpdate(
    { _id: contactId },
    { favorite: req.body.favorite },
    { new: true }
  );

  res.json(result);
};

module.exports = updateStatusContact;
