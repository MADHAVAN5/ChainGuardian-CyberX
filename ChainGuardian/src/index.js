import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import AuthContextProvider from './context/authContext'
import AddressContextProvider from './context/addressContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <AddressContextProvider>
        <App />
      </AddressContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)