import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

//pages
import LandingPage from './pages/landingPage'
import Signup from './pages/signup'
import Signin from './pages/signin'
import Forgot from './pages/forgot'
import AddressAnalysis from './pages/wallet'
import Transaction from './pages/transaction/transaction'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/auth/signup' element={<Signup />}/>
          <Route path='/auth/signin' element={<Signin />}/>
          <Route path='/auth/forgot' element={<Forgot />}/>
          <Route path='/api/wallet' element={<AddressAnalysis />}/>
          <Route path='/transaction' element={<Transaction/>}/>

        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
