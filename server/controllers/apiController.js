const  axios = require('axios')

const tnxDetails = async (req, res) => {
  const chain = req.params.chain
  const txnId = req.params.txn_id

  if (!chain || !txnId) {
    return res.status(400).json({ error: 'Missing parameters' })
  }

  const apiUrl = `https://api.blockchair.com/${chain}/dashboards/transaction/${txnId}?key=${process.env.APIKEY}`

  axios.get(apiUrl)
    .then(response =>{
      const data = response.data
      console.log(data)
      res.json(data)
    })
    .catch(error => {
      res.status(404).json({ error: error.message })
    })
}

const accDetails = async (req, res) => {
  const chain = req.params.chain
  const address = req.params.address

  if (!chain || !address) {
    return res.status(400).json({ error: 'Missing parameters' })
  }

  const apiUrl = `https://api.blockchair.com/${chain}/dashboards/address/${address}?key=${process.env.APIKEY}`
  console.log(apiUrl)
  axios.get(apiUrl)
    .then(response =>{
      const data = response.data
      console.log(data)
      res.json(data)
    })
    .catch(error => {
      res.status(404).json({ error: error.message })
    })
}

module.exports = { tnxDetails, accDetails}