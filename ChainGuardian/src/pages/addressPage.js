import React, { useContext, useState } from 'react'

import './addressPage.css'

import useAddress from '../../hooks/useAddress'

const AddressPage = () => {
    const [chain, setChain] = useState(null)
    const [address, setAddress] = useState(null)
    const [err, setError] = useState(null)
    const [isPending, setPending] = useState(false)
    const { error, data: chainName, getChain } = useAddress()
    const { data:addressData, dispatch } = useContext()

    const [isAddressValid, setAddressValid] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        setPending(true)
        getChain(address)
        if (!error) {
            const response = await fetch(`/api/addressData/${chainName.chain}/${address}`)
            const json = await response.json()
            if (!response.ok) {
                setPending(false)
                dispatch({type:"ERROR",payload:null})
                setError(json.error)
            }

            if (response.ok) {
                setPending(false)
                setError(null)
                dispatch({type:"ADD",payload:json})
            }
        }

        else if ((isPending === false) && (chainName !== null)) {
            setAddressValid(false)
        } else {
            setAddressValid(true)
        }
    }
    return (
        <>
            <div className='h-screen flex bg-gray-bg1'>
                <div className='w-full grid max-w-md m-auto bg-indigo-600 rounded-lg shadow-default py-10 px-16'>
                    <h1 className='text-2xl font-medium text-white mt-4 mb-12 text-center'>
                        Submit the Address details
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='email' className='text-white'>Chain address</label>
                            <input
                                type='text'
                                className={`w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                id='chain_address'
                                placeholder='enter chain address'
                                onChange={(e) => setAddress(e.target.value)}
                                value={address}
                            />
                            <div>
                                <label htmlFor='email' className='text-white'>Select Chain</label>
                                <label class="select" for="slct" >
                                    <select id="slct" required="required" onChange={(e) => setChain(e.target.value)}>
                                        <option value="" disabled="disabled" selected="selected">Select option</option>
                                        <option value=" " hidden selected></option>
                                        <option value="bitcoin">Bitcoin</option>
                                        <option value="bitcoin-cash">Bitcoin Cash</option>
                                        <option value="ethereum">Ethereum</option>
                                        <option value="litecoin">Litecoin</option>
                                        <option value="bitcoin-sv">Bitcoin-sv</option>
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
                            {(isAddressValid !== true) && isPending ? <button className={`bg-indigo-600 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`} disabled>Loading..</button> : <button className={`bg-indigo-600 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}>Find</button>}
                        </div>
                        {err && <div className="error">{err}</div>}
                        {isAddressValid && <div class='error'>Could not fetch the details for this address</div>}
                        {/* {addressData && <TransactionSection data={addressData} />} */}
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddressPage;