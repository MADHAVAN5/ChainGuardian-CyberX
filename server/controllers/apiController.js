const  axios = require('axios')
var WAValidator = require('multicoin-address-validator');

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
  finalData = {}
  axios.get(apiUrl)
    .then(response =>{
      const data = response.data
      //console.log(data)
      finalData['address'] = address
      finalData['balanceUSD'] = data.data[address]["address"]['balance_usd']
      finalData['balanceETH'] = data.data[address]["address"]['balance'] / 1000000000000000000
      finalData['sendUSD'] = data.data[address]["address"]['spent_usd']
      finalData['feesUSD'] = data.data[address]["address"]['fees_usd']
      finalData['receivedUSD'] = data.data[address]["address"]['received_usd']
      finalData['firstReceived'] = data.data[address]["address"]['first_seen_receiving']
      finalData['transactionCount'] = data.data[address]["address"]['transaction_count']
      finalData['lastReceived'] = data.data[address]["address"]['first_seen_spending']
      finalData['firstSend'] = data.data[address]["address"]['first_seen_spending']
      finalData['lastSend'] = data.data[address]["address"]['last_seen_spending']
      finalData['transactions'] = data.data[address]["transactions"]

      console.log(finalData)
      // if(chain != 'bitcoin'){
      //   finalData['transactions'] = {}
      //     for (let i = 0; i < data.data[address]["calls"].length; i++) {
      //       finalData['transactions'][i] = {}
      //       finalData['transactions'][i]['transaction'] = data.data[address]["calls"][i].transaction_hash
      //       finalData['transactions'][i]['sender'] = data.data[address]["calls"][i].sender
      //       finalData['transactions'][i]['receiver'] = data.data[address]["calls"][i].recipient
      //       finalData['transactions'][i]['time'] = data.data[address]["calls"][i].time
      //       finalData['transactions'][i]['usd'] = data.data[address]["calls"][i].value_usd
      //       finalData['transactions'][i]['transferred'] = data.data[address]["calls"][i].transferred
      //       finalData['transactions'][i]['block_id'] = data.data[address]["calls"][i].block_id
      //     }
        
      // }else{
      //   finalData['transactions'] = data.data[address]["transactions"]
      // } 

      //res.json(data)
      res.json(data)
    })
    .catch(error => {
      res.status(404).json({ error: error.message })
    })
}

const accValidator = async (req, res) => {
  const address = req.params.address

  if (!address) {
    return res.status(400).json({ error: 'Missing parameters' })
  }

  blockChains = ['0x','Aave Coin','Algorand','Bitcoin','Chainlink','CUSD','Dash','DogeCoin','Ethereum','LiteCoin','Matic','Neo','Polymath','Ripple','Solana','Stellar','Tether','TrueUSD','Uniswap Coin','ZenCash']
  chainVerified = null

  for (let j = 0; j < blockChains.length; j++) {
    var valid = WAValidator.validate(address, blockChains[j]);
    if(valid){
      chainVerified = blockChains[j]
      break;
    }
    else{
      continue 
    }
  }
  console.log(chainVerified)
}

module.exports = { tnxDetails, accDetails, accValidator}