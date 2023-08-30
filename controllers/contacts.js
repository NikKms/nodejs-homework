const contacts = require("../models/contacts");
const { HttpError, controlWrapper } = require("../helpers");

const listContacts = async (req, res) => {
	const result = await contacts.listContacts();

	res.json(result);
};

const getContactById = async (req, res) => {
	const { contactId: id } = req.params;
	const result = await contacts.getContactById(id);
	if (!result) {
		throw HttpError(404, "Not found");
	}

	res.json(result);
};

const removeContact = async (req, res) => {
	const { contactId: id } = req.params;
	const result = await contacts.removeContact(id);
	if (!result) {
		throw HttpError(404, "Not found");
	}

	res.json({
		message: "Contact Delete success",
	});
};

const addContact = async (req, res) => {
	const result = await contacts.addContact(req.body);
	if (!result) {
		throw Error(400, "Missing required name field");
	}

	res.status(201).json(result);
};

const updateContact = async (req, res) => {
	const { contactId: id } = req.params;
	const result = await contacts.updateContact(id, req.body);
	if (!result) {
		throw HttpError(400, "Missing fields");
	}

	res.json(result);
};

module.exports = {
	listContacts: controlWrapper(listContacts),
	getContactById: controlWrapper(getContactById),
	removeContact: controlWrapper(removeContact),
	addContact: controlWrapper(addContact),
	updateContact: controlWrapper(updateContact),
};
