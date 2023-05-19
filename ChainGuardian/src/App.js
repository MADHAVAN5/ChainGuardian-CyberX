import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

//pages
import LandingPage from './pages/landingPage'
import Signup from './pages/signup'
import Signin from './pages/signin'
import Forgot from './pages/forgot'
import Dashboard from './pages/dashboardPage'
import Transaction from './pages/transaction/transaction'
import Address from './pages/address/addressPage'
import Block from './pages/blockPage'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/auth/signup' element={<Signup />}/>
          <Route path='/auth/signin' element={<Signin />}/>
          <Route path='/auth/forgot' element={<Forgot />}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/transaction' element={<Transaction/>}/>
          <Route path='/address' element={<Address />}/>
          <Route path='/block' element={<Block />}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
