const { Contact } = require('../models/contact');

const { HttpError, controlWrapper } = require('../helpers');

const listContacts = async (req, res) => {
  const result = await Contact.find({}, '-createdAt -updatedAt');
  if (result) {
    console.log(`Find ${result.length} contacts in yor list`);
  }

  res.json(result);
};

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById({ _id: contactId });
  if (!result) {
    throw HttpError(404, 'Not found');
  }

  res.json(result);
};

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove({ _id: contactId });
  if (!result) {
    throw HttpError(404, 'Not found');
  }

  res.json({
    message: 'Contact Delete success',
  });
};

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);
  if (!result) {
    throw Error(400, 'Missing required name field');
  } else {
    const { name } = req.body;
    console.log(`Contact ${name} added to your contacts list 🎉`);
  }

  res.status(201).json(result);
};

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate({ _id: contactId }, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(400, 'Missing fields');
  } else {
    const { name } = req.body;
    console.log(`Contact ${name} updated!! `);
  }

  res.json(result);
};

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate({ _id: contactId }, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(400, 'missing field favorite');
  }

  res.json(result);
};

module.exports = {
  listContacts: controlWrapper(listContacts),
  getContactById: controlWrapper(getContactById),
  removeContact: controlWrapper(removeContact),
  addContact: controlWrapper(addContact),
  updateContact: controlWrapper(updateContact),
  updateStatusContact: controlWrapper(updateStatusContact),
};
