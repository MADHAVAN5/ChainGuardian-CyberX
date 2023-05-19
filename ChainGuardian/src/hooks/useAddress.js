import { useState } from "react"

const useAddress = () => {
    const [error, setError] = useState(null)
    const [isPending, setPending] = useState(false)
    const [data, setData] = useState(null)

    const checkAddressStatus = (address) => {
        setError(null)
        setPending(true)
        const abortController = new AbortController()

       fetch(`/api/addressValidator/${address}`)
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

        const getAddressData = (chain,address) => {
            setError(null)
            setPending(true)
            const abortController = new AbortController()
    
           fetch(`/api/addressData/${chain}/${address}`)
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

        return {error,isPending,data,checkAddressStatus,getAddressData}
    }

    export default getTransaction