import React, { useContext,useState } from 'react'
import { Link } from 'react-router-dom' ; 
import { assets } from '../assets/assets';
import { Appcontext } from '../context/Appcontext';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { navigate,setquery,user,setuser} = useContext(Appcontext)
    const [open, setOpen] = useState(false)
    const [isOpen, setisOpen] = useState(false)
    const [input, setinput] = useState('')
    const handlesearch=(e)=>{
        if(e.key=='Enter'&& input.trim()!==""){
            setquery(input);
            navigate('/all-jobs');
            setinput('');
            
        }
    }
    const logout=()=>{
        setuser(false);
        navigate('/');
        toast.success("Logout successfully")
    }
    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <Link to="/"><img width={150} className='h-15' src={assets.job1} /></Link>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8 ">
                <Link to='/'>Home</Link>
                <Link to='/all-jobs'>Jobs</Link>
                <Link to='/about'>About</Link>

                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" value={input} onChange={(e)=>{
                        setinput(e.target.value)
                    }} 
                        onKeyDown={handlesearch}
                    />
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        <path clip-rule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>

                {user?(<div className='relative inline-block' 
                onMouseEnter={()=>{
                    setisOpen(true);
                }} onMouseLeave={()=>{
                    setisOpen(false)
                }}>
                    <img src={assets.user_profile} alt="" className='w-12 h-12 rounded-full cursor-pointer border border-gray-300 ' />
                    {isOpen&&(<div className='absolute right-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-35 z-50'> 
                        <p  onClick={() => navigate('/my-application')} className='px-4 py-2 hover:bg-gray-200 cursor-pointer '>My Application</p>
                        <p  onClick={() => navigate('/profile')} className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>My Profile</p>
                        <p  onClick={logout} className='px-4 py-2 hover:bg-red-500 cursor-pointer'>Logout</p>

                    </div>)}
                </div>):
                (<button onClick={() => navigate('/login')} className="cursor-pointer px-8 py-2 bg-sky-600 text-white rounded-full">
                    Login
                </button>)}
            </div>

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                {/* Menu Icon SVG */}
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg>
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                <Link to='/'>Home</Link>
                <Link to='/all-jobs'>Jobs</Link>
                <Link to='/about'>About</Link>

                <button onClick={() => navigate('/login')} className="cursor-pointer px-6 py-2 mt-2 bg-primary active:bg-black transition text-white rounded-full text-sm">
                    Login
                </button>
            </div>

        </nav>
    )
}

export default Navbar
