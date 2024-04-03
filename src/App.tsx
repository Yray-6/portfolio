import { Route, Routes } from 'react-router-dom'
import './App.css'
// import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import About from './components/About'
import { Particlebg } from './components/Particlebg'
import Home from './components/Home'


function App() {
 

  return (
    <>
    <div className=' w-48'>
    <Particlebg />
    </div>
    
    <div className="   text-white relative z-[999]">
    
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
