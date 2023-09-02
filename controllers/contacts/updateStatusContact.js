const { modelContact } = require('../../models');

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;

  if (!req.body || !req.body.favorite) {
    return res.status(400).json({ message: 'missing field favorite' });
  }

  const result = await modelContact.Contact.findByIdAndUpdate(
    { _id: contactId },
    { favorite: req.body.favorite },
    { new: true }
  );

  res.json(result);
};

module.exports = updateStatusContact;
