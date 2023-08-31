const express = require('express');

const contactsControler = require('../../controllers/contacts');

const { validateBody, isValidId } = require('../../middlewares');

const { schemas } = require('../../models/contact');

const router = express.Router();

router.get('/', contactsControler.listContacts);

router.get('/:contactId', isValidId, contactsControler.getContactById);

router.delete('/:contactId', isValidId, contactsControler.removeContact);

router.post('/', validateBody(schemas.addSchema), contactsControler.addContact);

router.put(
  '/:contactId',
  isValidId,
  validateBody(schemas.addSchema),
  contactsControler.updateContact
);

router.patch(
  '/:contactId/favorite',
  isValidId,
  validateBody(schemas.updFavoriteSchema),
  contactsControler.updateStatusContact
);

module.exports = router;
