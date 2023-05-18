import './App.css'
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom'

//pages
import LandingPage from './pages/landingPage'
import Login from './pages/login'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
