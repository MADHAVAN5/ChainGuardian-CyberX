import { useState } from "react"

const useAddress = () => {
    const [error, setError] = useState(null)
    const [isPending, setPending] = useState(false)
    const [whichChain, setWhichChain] = useState(null)
    const [data, setData] = useState(null)

    const checkAddressStatusAndFetchingDetails = async (address) => {
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
            const dataRes = await fetch(`/api/addressData/${json.chain}/${address}`)
            const jsonData = await dataRes.json()
            if (!dataRes.ok) {
                setPending(false)
                setData(null)
                setError(jsonData.error)
            }

            if (dataRes.ok) {
                setPending(false)
                setError(null)
                    setData(jsonData)
            }
        }
    }

    return { error, isPending, data,whichChain, checkAddressStatusAndFetchingDetails }
}

export default useAddress