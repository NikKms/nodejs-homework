const listContacts = require('./listContacts');
const getContactById = require('./getContactById');
const removeContact = require('./removeContact');
const addContact = require('./addContact');
const updateContact = require('./updateContact');
const updateStatusContact = require('./updateStatusContact');

const { controlWrapper } = require('../../helpers');

const ctrlContacts = {
  listContacts: controlWrapper(listContacts),
  getContactById: controlWrapper(getContactById),
  removeContact: controlWrapper(removeContact),
  addContact: controlWrapper(addContact),
  updateContact: controlWrapper(updateContact),
  updateStatusContact: controlWrapper(updateStatusContact),
};

module.exports = ctrlContacts;
