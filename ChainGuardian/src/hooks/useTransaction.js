import { useState } from "react"

const useTransaction = () => {
    const [error, setError] = useState(null)
    const [isPending, setPending] = useState(false)
    const [data, setData] = useState(null)

    const getTransaction = async (chain, txn_id) => {
        setError(null)
        setPending(true)

        const response = await fetch(`/api/addressData/${chain}/${txn_id}`)
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
    return { error, isPending, data, getTransaction }
}

export default useTransaction