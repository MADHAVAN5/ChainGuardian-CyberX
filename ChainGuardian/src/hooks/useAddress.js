import { useState } from "react"

const useAddress = () => {
    const [error, setError] = useState(null)
    const [isPending, setPending] = useState(false)
    const [whichChain, setWhichChain] = useState(false)
    const [data, setData] = useState(null)

    const checkAddressStatus = async (address) => {
        setError(null)
        setPending(true)
        const response = await fetch(`/api/addressValidator/${address}`)
        const json = await response.json()
        if (!response.ok) {
            setPending(false)
            setWhichChain(null)
            setError(json.error)
        }

        if (response.ok) {
            setPending(false)
            setError(null)
            setWhichChain(json)
        }
    }
   

    const getAddressData = async (chain, address) => {
        setError(null)
        setPending(true)

        const response = await fetch(`/api/addressData/${chain}/${address}`)
        const json = await response.json()
        if (!response.ok) {
            setPending(false)
            setData(null)
            setError(json.error)
        }

        if (response.ok) {
            setPending(false)
            setError(null)
            setData(json)
            console.log(json)
        }
    }

    return { error, isPending, data,whichChain, checkAddressStatus, getAddressData }
}

export default useAddress