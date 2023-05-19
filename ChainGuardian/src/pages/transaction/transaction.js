import React, { useState } from 'react'

import './transaction.css'

import useTransaction  from '../../hooks/useTransaction'
import TransactionSection from '../../components/transactionSec'
import Navbar from '../../components/navbar'
import Find from '../../components/Find'
import Table from '../../components/Table'

function Transaction() {
  const { error, isPending, data, getTransaction } = useTransaction()
  const [Id , setTxnId] = useState(null)
  const handleSubmit = (chain,txnId) => {
    getTransaction(chain,txnId)
    setTxnId(txnId)
    console.log(data)
  }
  return (
    <>
      <Navbar/>
      <Find handleSubmit={handleSubmit}/>
      {data && <TransactionSection data={data} txnId={Id}/>}
      <Table data={data}/>
    </>
  )
}

export default Transaction
