const express = require("express");

const contactsControler = require("../../controllers/contacts");
const { validateBody } = require("../../middlewares");
const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", contactsControler.listContacts);

router.get("/:contactId", contactsControler.getContactById);

router.delete("/:contactId", contactsControler.removeContact);

router.post("/", validateBody(schemas.addSchema), contactsControler.addContact);

router.put(
	"/:contactId",
	validateBody(schemas.addSchema),
	contactsControler.updateContact
);

module.exports = router;
