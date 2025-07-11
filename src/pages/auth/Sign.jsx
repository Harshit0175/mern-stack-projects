import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Appcontext } from '../../context/Appcontext'

const Sign = () => {
    const {navigate} = useContext(Appcontext)
    const [file, setFile] = useState(null)
    const [preview, setpreview] = useState(null)
    const [formdata, setformdata] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
        image: null,
    })

    const handlechange = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value })


    }
    const handlefilechanges = (e) => {
        const selectedfile = e.target.files[0]
        setFile(selectedfile)
        setformdata({ ...formdata, image: selectedfile })
        if (selectedfile) {
            const imagessrc = URL.createObjectURL(selectedfile)
            setpreview(imagessrc)
        }

    }
    const handlesubmit = async (e) => {
        e.preventDefault()
        navigate('/login')
        console.log('formdata', formdata);



    }
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <form onSubmit={handlesubmit}

                className="bg-white text-gray-500 max-w-[350px] mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/20">

                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Sign Up Now</h2>
                <div className='w-full my-4'>
                    {preview &&(
                        <div className=' mb-4 flex justify-center'>
                            <img src={preview} alt="Preview" className='w-24 h-24 rounded-full border-shadow' />

                        </div>
                        )}
                    <input type='file' accept='image/*' onChange={handlefilechanges} className='w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer' />

                </div>
                <input className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="text" name='name' value={formdata.name} onChange={handlechange} placeholder="Enter your name" required />

                <input className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="email" name='email' value={formdata.email} onChange={handlechange} placeholder="Enter your email" required />

                <select className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="role" name='role' value={formdata.role} onChange={handlechange}  >
                    <option value="">Select Role</option>
                    <option value="employer">Employer</option>
                    <option value="job seeker">Job Seeker</option>
                </select>

                <input className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4 mx-auto" type="password"
                    name='password' value={formdata.password} onChange={handlechange} placeholder="Enter your password" required />

                <button type="submit" className="w-full my-3 bg-primary active:bg-black transition py-2.5 rounded-full text-white">Sign Up</button>
                <p className="text-center mt-4">Already have an account? <Link to='/login' className="text-blue-500 underline">Login Now</Link></p>
            </form>

        </div>
    )
}

export default Sign
