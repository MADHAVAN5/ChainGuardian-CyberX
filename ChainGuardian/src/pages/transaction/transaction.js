import React, { useState } from 'react'

import './transaction.css'

import useTransaction  from '../../hooks/useTransaction'
import TransactionSection from '../../components/TransactionSection'

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
    <div className='h-screen flex bg-gray-bg1'>
      <div className='w-full max-w-md m-auto bg-indigo-600 rounded-lg shadow-default py-10 px-16'>
        <h1 className='text-2xl font-medium text-white mt-4 mb-12 text-center'>
          Submit your Transaction Details
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email' className='text-white'>Enter Transaction ID</label>
                <input
                    type='text'
                    className={`w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                    id='txn_id'
                    placeholder='Transaction ID'
                    onChange={(e) => setTxnId(e.target.value)}
                    value={txnId}
                />
            <div>
            <label htmlFor='email' className='text-white'>Select Your Chain</label>
              <label class="select" for="slct" >
                <select id="slct" required="required" onChange={(e)=>setChain(e.target.value)}>
                  <option value="" disabled="disabled" selected="selected">Select option</option>
                  <option value="bitcoin">Bitcoin</option>
                  <option value="bitcoin-cash">Bitcoin Cash</option>
                  <option value="ethereum" onClick={(e) => setChain(e.target.value)}>Ethereum</option>
                  <option value="litecoin" onClick={(e) => setChain(e.target.value)}>Litecoin</option>
                  <option value="bitcoin-sv" onClick={(e) => setChain(e.target.value)}>Bitcoin-sv</option>
                </select>
                <svg>
                  <use xlinkHref="#select-arrow-down"></use>
                </svg>
              </label>
              <svg class="sprites">
                <symbol id="select-arrow-down" viewbox="0 0 10 6">
                  <polyline points="1 1 5 5 9 1"></polyline>
                </symbol>
              </svg>
            </div>
          </div>
          <div className='flex justify-center items-center mt-6'>
            {isPending ? <button className={`bg-indigo-600 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`} disabled>Loading..</button> : <button className={`bg-indigo-600 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}>Find</button>}
          </div>
          {error && <div className="error">{error}</div>}
          {data && <TransactionSection data={data}/> }
        </form>
      </div>
    </div>

  )
}

export default Transaction
