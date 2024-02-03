const igdl = require("igdown-scrapper")
const igDL = async (url) => {
  const mp4 = await igdl(`${url}`)
  .then((response) => {
    return response.url
  })
  return mp4
}
module.exports = igDL