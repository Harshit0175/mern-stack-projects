import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'

import { useParams } from 'react-router-dom'

const Jobdetails = () => {

    const {jobdata}= useContext(Appcontext)
    const { id } = useParams();
    const job=jobdata.find((jobs)=>jobs._id===parseInt(id))
    console.log(job)

  return (
    <div className='py-16 px-4'>
      <h1 className='text-2xl md:text-5xl font-semibold text-gray-800 text-center mb-8'>
        Job Details Page
      </h1>
      <div>
        {/* left section */}
        <div className='w-full flex flex-col md:flex-row items-center justify-center mt-10 gap-8'>
          <div className='flex flex-col'>
            <div className='flex items-center gap-5'>
            <img src={job.image} alt="" className='w-[86px] h-[86px]'/>
            <div>
              <h2 className='text-lg md:text-2xl font-semibold'>{job.title}</h2>
              <p className='text-xs sm:text-base'>{job.company} <span className='bg-green-200/40 p-1 rounded ml-2'>{job.type}</span>{''}</p>
            </div>
          </div>

            {/* description */}
            <div className='my-2 flex flex-col gap-4'>
              <h4 className='text-lg font-semibold text-gray-800'>job description</h4>
              <p>{job.description}</p>
            </div>
            {/* requirement  */}
            <div className='my-2 flex flex-col gap-4'>
              <h4 className='text-lg font-semibold text-gray-800'>
                Job Requirements
              </h4>
              <ul className='list-disc'>
                {job.requirements.map((item,idx)=>{
                  return( 
                    <li key={idx} className='text-gray-700'>{item}</li>
                  )
                   
                })}
              </ul>

            </div>
 
          </div>

        </div>
        {/* right section */}
        <div></div>
      </div>
      
    </div>
  )
}

export default Jobdetails
