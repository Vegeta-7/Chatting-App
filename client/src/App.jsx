import React, {useState} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { About, Chat, Faq, Home, Login } from './pages'

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <div className='dark:bg-main-dark-bg bg-main-bg min-h-screen w-full'>
          {/* <div className='static navbar w-full'>
            <Navbar />
          </div> */}
          <Routes>
            <Route path='/home' element={<Home />}/>
            <Route path='/' element={<Login />}/>
            <Route path='/chat' element={<Chat />}/>
            <Route path='/faq' element={<Faq />}/>
            <Route path='/about' element={<About />}/>            
          </Routes>
        </div>
      </BrowserRouter>      
    </div>
  )
}

export default App
