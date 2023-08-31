const express = require('express');

const router = express.Router();

const { validateBody, isValidId } = require('../../middlewares');

const { modelContact } = require('../../models');

const { ctrlContacts } = require('../../controllers');

router.get('/', ctrlContacts.listContacts);

router.get('/:contactId', isValidId, ctrlContacts.getContactById);

router.delete('/:contactId', isValidId, ctrlContacts.removeContact);

router.post(
  '/',
  validateBody(modelContact.schemas.addSchema),
  ctrlContacts.addContact
);

router.put(
  '/:contactId',
  isValidId,
  validateBody(modelContact.schemas.addSchema),
  ctrlContacts.updateContact
);

router.patch(
  '/:contactId/favorite',
  isValidId,
  validateBody(modelContact.schemas.updFavoriteSchema),
  ctrlContacts.updateStatusContact
);

module.exports = router;
