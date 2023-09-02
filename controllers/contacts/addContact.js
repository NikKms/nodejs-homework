const { modelContact } = require('../../models');

const addContact = async (req, res) => {
  const { _id: owner } = req.user;

  const result = await (
    await modelContact.Contact.create({ ...req.body, owner })
  ).populate('owner', 'email');

  if (!result) {
    throw Error(400, 'Missing required name field');
  } else {
    const { name } = req.body;
    console.log(`Contact ${name} added to your contacts list 🎉`);
  }

  res.status(201).json(result);
};

module.exports = addContact;
