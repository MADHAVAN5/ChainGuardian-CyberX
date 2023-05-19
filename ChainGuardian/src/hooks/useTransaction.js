import { useState } from "react"

const useTransaction = () => {
    const [error, setError] = useState(null)
    const [isPending, setPending] = useState(false)
    const [data, setData] = useState(null)

    const getTransaction = (chain,txn_id) => {
        setError(null)
        setPending(true)
        const abortController = new AbortController()

       fetch(`/api/transData/${chain}/${txn_id}`)
            .then((res) => res.json())
                .then(data=>{
                    if (!abortController.signal.aborted) {
                        setPending(false)
                        setError(null)
                        setData(data)
                    }
                })    
            .catch((err) => {
                if (!abortController.signal.aborted) {
                    setError(err.message)
                    setPending(false)
                    setData(null)
                }
            })
        }
        return {error,isPending,data,getTransaction}
    }

    export default getTransaction