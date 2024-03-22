import { Route, Routes } from 'react-router-dom'
import './App.css'
// import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import About from './components/About'


function App() {
 

  return (
    <div className="   text-white ">
      <Navbar/>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
