const axios = require("axios")
const {apikey} = require("../../config.js")
const twitdl = async (url) => {
  const mp4 = await axios.get(`https://api.fgmods.xyz/api/downloader/twitter?url=${url}&apikey=${apikey}`)
  .then((response) => {
    return response.data.result.HD
  })
  return mp4
}
module.exports = twitdl