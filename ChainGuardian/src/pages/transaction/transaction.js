import React, { useState } from 'react'

import './transaction.css'

import useTransaction  from '../../hooks/useTransaction'
import TransactionSection from '../../components/transactionSec'
import Navbar from '../../components/navbar'
import Find from '../../components/Find'
import Table from '../../components/Table'

function Transaction() {
  const [chain, setChain] = useState(null)
  const [txnId, setTxnId] = useState(null)
  const { error, isPending, data, getTransaction } = useTransaction()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(chain)
    getTransaction(chain,txnId)
  }

  return (
    <>
      <Navbar/>
      <Find/>
      <TransactionSection/>
      <Table/>
    </>
  )
}

export default Transaction
