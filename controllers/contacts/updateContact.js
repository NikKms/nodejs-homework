const { modelContact } = require('../../models');

const { HttpError } = require('../../helpers');

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await modelContact.Contact.findByIdAndUpdate(
    { _id: contactId },
    req.body,
    {
      new: true,
    }
  );
  if (!result) {
    throw HttpError(400, 'Missing fields');
  } else {
    const { name } = req.body;
    console.log(`Contact ${name} updated!! `);
  }

  res.json(result);
};

module.exports = updateContact;
