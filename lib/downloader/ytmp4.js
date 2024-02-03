const axios = require("axios");
const { apikey } = require("../../config.js");
const ytv = async (url) => {
  const mp4 = await axios
    .get(
      `https://api.fgmods.xyz/api/downloader/ytmp4?url=${url}&apikey=${apikey}`
    )
    .then((resYTV) => {
      return resYTV.data.result.dl_url;
    });
  return mp4;
};
module.exports = ytv;
