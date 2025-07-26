import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Appcontext } from '../../context/Appcontext'
import toast from 'react-hot-toast'

const Logins = () => {
  const { navigate, setuser, setemployer } = useContext(Appcontext)

  const [formdata, setformdata] = useState({
    email: '',
    password: '',
  })
  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value })

  }
  const handlesubmit = async (e) => {
    e.preventDefault()
    if (formdata.email === "employer@gmail.com" && formdata.password === "123456") {
      setemployer(true)
      navigate('/employer')
      toast.success('login sucessfully')
    }
    else {
      setuser(true)
      navigate('/')
    }




  }
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <form onSubmit={handlesubmit}

        className="bg-white text-gray-500 max-w-[350px] mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/20">

        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Login Now</h2>
        <input className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="email" name='email' value={formdata.email} onChange={handlechange} placeholder="Enter your email" required />
        <input className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4 mx-auto" type="password"
          name='password' value={formdata.password} onChange={handlechange} placeholder="Enter your password" required />

        <button type="submit" className="w-full my-3 bg-sky-600 active:bg-black transition py-2.5 rounded-full text-white">Log in</button>
        <p className="text-center mt-4">Don’t have an account? <Link to='/sign-up' className="text-blue-500 underline">Signup Now</Link></p>
      </form>

    </div>
  )
}

export default Logins
