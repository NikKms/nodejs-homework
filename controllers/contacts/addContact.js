const { modelContact } = require('../../models');

const addContact = async (req, res) => {
  const result = await modelContact.Contact.create(req.body);
  if (!result) {
    throw Error(400, 'Missing required name field');
  } else {
    const { name } = req.body;
    console.log(`Contact ${name} added to your contacts list 🎉`);
  }

  res.status(201).json(result);
};

module.exports = addContact;
