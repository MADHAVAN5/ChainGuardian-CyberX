import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
