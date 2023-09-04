const { Schema, model } = require('mongoose');
const Joi = require('joi');

const { handleMongooseError } = require('../helpers');

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post('save', handleMongooseError);

const addSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ 'string.empty': 'Missing required name field' }),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

const updFavoriteSchema = Joi.object({
  favorite: Joi.boolean()
    .required()
    .valid(true)
    .error(new Error('missing field favorite')),
});

const schemas = {
  addSchema,
  updFavoriteSchema,
};

const Contact = model('contact', contactSchema);

const modelContact = { Contact, schemas };

module.exports = modelContact;
