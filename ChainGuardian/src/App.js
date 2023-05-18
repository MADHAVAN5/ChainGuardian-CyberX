import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

//pages
import LandingPage from './pages/landingPage'
import Signup from './pages/signup'
import Signin from './pages/signin'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/auth/signup' element={<Signup />}/>
          <Route path='/auth/signin' element={<Signin />}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
