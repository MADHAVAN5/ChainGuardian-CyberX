const  axios = require('axios')

const testing = async (req, res) => {
  res.json({data:'api end point'})
}

module.exports = { testing }