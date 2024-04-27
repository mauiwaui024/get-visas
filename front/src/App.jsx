import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { UK } from './pages/UK/UK'
import {USA} from "./pages/USA/USA"
import { Europe } from './pages/Europe/Europe'
import {Home} from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
  <div className='App'>
    <Navbar/>
    <Routes>
      <Route path = "/" exact element ={<Home/>} />
      <Route path = "/UK" element ={<UK/>} />
      <Route path = "/USA" element ={<USA/>} />
      <Route path = "/europe" element ={<Europe/>} />
      
    </Routes>
  </div>
  )
}

export default App