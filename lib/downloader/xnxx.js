const axios = require("axios")
const {apikey} = require("../../config.js")
const xndl = async (url) => {
  const mp4 = await axios.get(`https://api.fgmods.xyz/api/downloader/xnxxdl?url=${url}&apikey=${apikey}`)
  .then((response) => {
    return response.data.result
  })
  return mp4
}
module.exports = xndl