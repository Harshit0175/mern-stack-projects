import React ,{useContext}from 'react'
import { Appcontext } from '../context/Appcontext';
import { assets } from '../assets/assets';

const Jobcard = ({ item }) => {
    const { navigate } = useContext(Appcontext);

  return (
    <div onClick={() => navigate(`/job-details/${item._id}`)} className='cursor-pointer p-5 flex flex-col gap-2 border border-gray-300 rounded-xl w-auto lg:w-[424px] bg-gradient-to-r from-purple-200/80 mx-6 '>
        <h1 className='text-2xl font-medium text-gray-800'>{item.title}</h1>
        <div className='flex  gap-4'>
      <p className='text-sm bg-green-300/40 p-1'>{item.type}</p>
        <p className='text-sm text-gray-800'>{item.salary}</p>
        </div>
        <div className='flex gap-4 items-center my-2'>
            <img src={item.image} className='w-[48px] h-[48px]'/>
            <div className='flex flex-col md:flex-row items-center justify-between text-sm'>
                <h3> {item.company}</h3>
                <h3>{item.location}</h3>
            </div>
            <div>
              <img src={assets.save_later_icon} className=' w-12 h-12'  />
            </div>
            
        </div>
        
    </div>
  )
}

export default Jobcard
