import React from 'react'
import { Routes,Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Alljobs from './pages/Alljobs'
import Jobdetails from './pages/Jobdetails'
import Sign from './pages/auth/Sign'
import Logins from './pages/auth/Logins'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const App = () => {
  let adminpath=useLocation().pathname.includes('admin')
  let employerpath=useLocation().pathname.includes('employer')
  return (
    <div >
  {adminpath||employerpath?null:<Navbar/> }
  
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/all-jobs" element={<Alljobs/>} />
        <Route path="/job-details/:id" element={<Jobdetails/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/sign-up" element={<Sign/>} />
        <Route path="/login" element={<Logins/>} />
       </Routes>
       
  {adminpath||employerpath?null:<Footer/> }

    </div>
  )
}

export default App
