const { Schema, model } = require('mongoose');
const Joi = require('joi');

const { handleMongooseError } = require('../helpers');

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const subscriptionList = ['starter', 'pro', 'business'];

const userSchema = new Schema(
  {
    password: {
      type: String,
      minlength: 8,
      required: [true, 'Password is required'],
    },
    email: {
      type: String,
      match: emailRegex,
      required: [true, 'Email is required'],
      unique: true,
    },
    subscription: {
      type: String,
      enum: subscriptionList,
      default: 'starter',
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      required: true,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      default: '',
      required: [true, 'Verify token is required'],
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post('save', handleMongooseError);

const regSchema = Joi.object({
  password: Joi.string().min(8).required(),
  email: Joi.string().pattern(emailRegex).required(),
});

const verifSchema = Joi.object({
  email: Joi.string()
    .pattern(emailRegex)
    .required()
    .messages({ 'string.empty': 'missing required field email' }),
});

const loginSchema = Joi.object({
  password: Joi.string().min(8).required(),
  email: Joi.string().pattern(emailRegex).required(),
});

const updtSubscriptionSchema = Joi.object({
  subscription: Joi.string().valid(...subscriptionList),
});

const schemas = {
  regSchema,
  verifSchema,
  loginSchema,
  updtSubscriptionSchema,
};

const User = model('user', userSchema);

const modelUser = { User, schemas };

module.exports = modelUser;
