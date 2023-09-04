const express = require('express');

const { validateBody, autheticate, upload } = require('../../middlewares');

const { modelUser } = require('../../models');

const { ctrlUsers } = require('../../controllers');

const router = express.Router();

router.post(
  '/register',
  validateBody(modelUser.schemas.regSchema),
  ctrlUsers.register
);

router.get('/verify/:verificationToken', ctrlUsers.verifyEmail);

router.post(
  '/verify',
  validateBody(modelUser.schemas.verifSchema),
  ctrlUsers.resendVerify
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

router.patch(
  '/avatars',
  autheticate,
  upload.single('avatar'),
  ctrlUsers.updateAvatar
);

module.exports = router;
