import React,{useContext} from 'react'
import { Appcontext } from '../context/Appcontext';
import Jobcard from './Jobcard';


const Jobs = () => {
    const { jobdata } = useContext(Appcontext);

  return (
    <div className='py-16 '>
      <h1 className='text-2xl md:text-5xl font-semibold text-gray-800 text-center'>Featured Jobs</h1>
      <div className='my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center items-center'>
        {jobdata.map((item,idx)=>{
            return(
              <Jobcard key={idx} item={item} />

            )
        })}
      </div>
    </div>
  )
}

export default Jobs
