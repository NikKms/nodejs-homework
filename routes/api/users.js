const express = require('express');

const { validateBody, autheticate } = require('../../middlewares');

const { modelUser } = require('../../models');

const { ctrlUsers } = require('../../controllers');

const router = express.Router();

router.post(
  '/register',
  validateBody(modelUser.schemas.regSchema),
  ctrlUsers.register
);

router.post(
  '/login',
  validateBody(modelUser.schemas.loginSchema),
  ctrlUsers.login
);

router.post('/current', autheticate, ctrlUsers.getCurrent);

router.post('/logout', autheticate, ctrlUsers.logout);

router.patch(
  '/',
  autheticate,
  validateBody(modelUser.schemas.updtSubscriptionSchema),
  ctrlUsers.updtSubscription
);

module.exports = router;
