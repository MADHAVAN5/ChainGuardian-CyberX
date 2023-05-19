import { createContext, useReducer } from "react"

export const AddressContext = createContext()

export const addressReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return { ...state, addressData: action.payload }
        default:
            return state
    }
}

const AddressContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(addressReducer, {
        addressData: null,
    })

    return (
        <AddressContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AddressContext.Provider>
    )
}

export default AddressContextProvider