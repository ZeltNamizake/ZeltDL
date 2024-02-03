const axios = require("axios");
const { apikey } = require("../../config.js");
const yta = async (url) => {
  const mp3 = await axios
    .get(
      `https://api.fgmods.xyz/api/downloader/ytmp3?url=${url}&apikey=${apikey}`
    )
    .then((resYTA) => {
      return resYTA.data.result.title;
    });
  return mp3;
};
module.exports = yta;
