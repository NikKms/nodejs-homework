const listContacts = require('./listContacts');
const getContactById = require('./getContactById');
const removeContact = require('./removeContact');
const addContact = require('./addContact');
const updateContact = require('./updateContact');
const updateStatusContact = require('./updateStatusContact');
const getFavorite = require('./getFavorite');

const { controlWrapper } = require('../../helpers');

const ctrlContacts = {
  listContacts: controlWrapper(listContacts),
  getContactById: controlWrapper(getContactById),
  removeContact: controlWrapper(removeContact),
  addContact: controlWrapper(addContact),
  updateContact: controlWrapper(updateContact),
  updateStatusContact: controlWrapper(updateStatusContact),
  getFavorite: controlWrapper(getFavorite),
};

module.exports = ctrlContacts;
