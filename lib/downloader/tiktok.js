const axios = require("axios")
const {apikey} = require(`../../config.js`)
const ttdl = async (url) => {
  const mp4 = await axios.get(`https://api.fgmods.xyz/api/downloader/tiktok?url=${url}&apikey=${apikey}`)
  .then((response) => {
    return response.data.result.hdplay
  })
  return mp4
}
module.exports = ttdl