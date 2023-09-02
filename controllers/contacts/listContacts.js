const { modelContact } = require('../../models');

const listContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * 10;

  const result = await modelContact.Contact.find(
    { owner },
    '-createdAt -updatedAt',
    { skip, limit }
  ).populate('owner', 'email favorite');

  if (result) {
    console.log(`Find ${result.length} contacts in yor list`);
  }

  res.json(result);
};

module.exports = listContacts;
