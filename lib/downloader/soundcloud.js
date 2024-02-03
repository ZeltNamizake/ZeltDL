const axios = require("axios")
const {apikey} = require("../../config.js")
const scdl = async (url) => {
  const mp3 = await axios.get(`https://api.fgmods.xyz/api/downloader/soundcloud?url=${url}&apikey=${apikey}`)
  .then((response) => {
    return response.data.result
  })
  return mp3
}
module.exports = scdl