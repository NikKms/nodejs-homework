const path = require('path');
const fs = require('fs/promises');
const { modelUser } = require('../../models');
const Jimp = require('jimp');

const avatarsDir = path.join(__dirname, '../../', 'public', 'avatars');

const updateAvatar = async (req, res) => {
  const { _id: owner } = req.user;

  const { path: tempUpload, originalname } = req.file;

  const filename = `${owner}_${originalname}`;
  const resultUpload = path.join(avatarsDir, filename);

  await fs.rename(tempUpload, resultUpload);

  Jimp.read(resultUpload)
    .then(res => {
      return res.resize(250, 250).write(resultUpload);
    })
    .catch(err => {
      console.error(err);
    });

  const avatarURL = path.join('avatars', filename);

  await modelUser.User.findByIdAndUpdate(owner, { avatarURL });

  res.json({ avatarURL });
};

module.exports = updateAvatar;
