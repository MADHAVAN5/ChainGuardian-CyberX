import { useState } from "react"

const useTransaction = () => {
    const [error, setError] = useState(null)
    const [isPending, setPending] = useState(false)
    const [data, setData] = useState(null)

    const getTransaction = async (chain, txn_id) => {
        setError(null)

        await fetch(`/api/addressData/${chain}/${txn_id}`)
        .then((response)=>{console.log(response)})
        .then(data=>{
            console.log(data)
            setPending(false)
            setError(null)
            setData(data)
        }).catch(err=>{
            setPending(false)
            setData(null)
            setError(err.message)
        })
    }
    return { error, isPending, data, getTransaction }
}

export default useTransaction