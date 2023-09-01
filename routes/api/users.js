const express = require('express');

const { validateBody } = require('../../middlewares');

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

module.exports = router;
