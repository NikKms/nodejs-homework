const express = require('express');

const { validateBody, isValidId, autheticate } = require('../../middlewares');

const { modelContact } = require('../../models');

const { ctrlContacts } = require('../../controllers');

const router = express.Router();

router.get('/', autheticate, ctrlContacts.listContacts);

router.get('/favorite', autheticate, ctrlContacts.getFavorite);

router.get('/:contactId', autheticate, isValidId, ctrlContacts.getContactById);

router.delete(
  '/:contactId',
  autheticate,
  isValidId,
  ctrlContacts.removeContact
);

router.post(
  '/',
  autheticate,
  validateBody(modelContact.schemas.addSchema),
  ctrlContacts.addContact
);

router.put(
  '/:contactId',
  isValidId,
  autheticate,
  validateBody(modelContact.schemas.addSchema),
  ctrlContacts.updateContact
);

router.patch(
  '/:contactId/favorite',
  isValidId,
  autheticate,
  validateBody(modelContact.schemas.updFavoriteSchema),
  ctrlContacts.updateStatusContact
);

module.exports = router;
