import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Alljobs from './pages/Alljobs'
import Jobdetails from './pages/Jobdetails'
import Sign from './pages/auth/Sign'
import Logins from './pages/auth/Logins'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import Profile from './pages/user/Profile'
import Myapplication from './pages/user/Myapplication'
import Employerlayout from './pages/employer/Employerlayout'
import Companieslist from './pages/employer/Companieslist'
import Addcompany from './pages/employer/Addcompany'
import Postjobs from './pages/employer/Postjobs'
import Jobslist from './pages/employer/Jobslist'
import Applicants from './pages/employer/Applicants'
const App = () => {
  let adminpath = useLocation().pathname.includes('admin')
  let employerpath = useLocation().pathname.includes('employer')
  return (
    <div >
      {adminpath || employerpath ? null : <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-jobs" element={<Alljobs />} />
        <Route path="/job-details/:id" element={<Jobdetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<Sign />} />
        <Route path="/login" element={<Logins />} />

        {/* user route */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-application" element={<Myapplication />} />
        {/* Employer Routes */}
        <Route path='/employer' element={<Employerlayout />}>
          <Route index element={<Companieslist />} />
            <Route index element={<Companieslist />} />
            <Route path="add-company" element={<Addcompany />} />
            <Route path="post-jobs" element={<Postjobs />} />
            <Route path="job-list" element={<Jobslist />} />
            <Route path="applicants" element={<Applicants />} />
          </Route>


        

      </Routes>

      {adminpath || employerpath ? null : <Footer />}
      <Toaster />

    </div>
  )
}

export default App
