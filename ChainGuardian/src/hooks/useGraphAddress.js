import React, { useState,useContext } from 'react';
//import AddressContext from '../context/addressContext'

const useGraphAddress = () => {
const [err, setError] = useState(null)
const [isPending, setPending] = useState(false)
const [data, setData] = useState(null)

//const {addressData} = useContext(AddressContext)

const getGraphAddress = async()=>{
    const response = await fetch(`/tree/graphAddr/bitcoin/3Hq4beNsdLRfYrNPogEtCz9U4W1R3BvAvK`)
  const json = await response.json()
  console.log(json)
  if (!response.ok) {
    setPending(false)
    setData(null)
    setError(json.error)
  }
  if (response.ok) {
    setPending(false)
    setError(null)
    setData(json)
  }
}
    
    return{err,isPending,data,getGraphAddress}
}
 
export default useGraphAddress;