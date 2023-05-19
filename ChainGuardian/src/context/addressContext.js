import { createContext, useReducer } from "react"

export const AddressContext = createContext()

export const addressReducer = (state, action) => {
    switch (action.type) {
        case 'ADDRESS_DATA':
            return { ...state, addressData: action.payload }
        case 'TRANSACTION_DATA':
            return {...state,transactionData:action.payload}
        default:
            return state
    }
}

const AddressContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(addressReducer, {
        addressData: null,
        transactionData:null
    })

    console.log(state)

    return (
        <AddressContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AddressContext.Provider>
    )
}

export default AddressContextProvider