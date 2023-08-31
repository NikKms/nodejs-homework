const { modelContact } = require('../../models');

const listContacts = async (req, res) => {
  const result = await modelContact.Contact.find({}, '-createdAt -updatedAt');
  if (result) {
    console.log(`Find ${result.length} contacts in yor list`);
  }

  res.json(result);
};

module.exports = listContacts;
