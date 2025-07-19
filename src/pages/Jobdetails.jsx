import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'

import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets'

const Jobdetails = () => {

  const { jobdata } = useContext(Appcontext)
  const { id } = useParams();
  const job = jobdata.find((jobs) => jobs._id === parseInt(id))
  console.log(job)

  return (
    <div className='py-16 px-4'>
      <h1 className='text-2xl md:text-5xl font-semibold text-gray-800 text-center mb-8'>
        Job Details Page
      </h1>
      <div>
        
        <div className='w-full flex flex-col md:flex-row items-center justify-center mt-10 gap-4'>
          {/* left section */}
          <div className='flex flex-col'>
            <div className='flex items-center gap-5'>
              <img src={job.image} alt="" className='w-[86px] h-[86px]' />
              <div>
                <h2 className='text-lg md:text-2xl font-semibold'>{job.title}</h2>
                <p className='text-xs sm:text-base'>{job.company} <span className='bg-green-200/40 p-1 rounded ml-2'>{job.type}</span>{''}</p>
              </div>
            </div>

            {/* description */}
            <div className='my-2 mx-6 flex flex-col gap-4'>
              <h4 className='text-lg font-semibold text-gray-800 '>job description</h4>
              <p className='max-w-[1500px]'>{job.description}</p>
            </div>
            {/* requirement  */}
            <div className='my-2 mx-5 flex flex-col gap-4'>
              <h4 className='text-lg font-semibold text-gray-800'>
                Job Requirements
              </h4>
              <ul className='list-disc'>
                {job.requirements.map((item, idx) => {
                  return (
                    <li key={idx} className='text-gray-700'>{item}</li>
                  )

                })}
              </ul>
            </div>
            <div className='my-2 mx-5 flex flex-col gap-4'>
              {/* job benefits */}
              <h4 className='text-lg font-semibold text-gray-800'>
                Job Benefits
              </h4>
              <ul className='list-disc'>
                {job.benefits.map((item, idx) => {
                  return (
                    <li key={idx} className='text-gray-700'>{item}</li>
                  )
                })}
              </ul>
            </div>
          </div>
          {/* right section */}

          <div className='flex flex-col' >
            <div className='flex gap-4'>
              <div>
                <img src={assets.save_later_icon} alt="" className='cursor-pointer' />
              </div>
              <button className=' cursor-pointer px-10 py-1 bg-sky-600 transition text-white rounded-full'>
                Apply Now
              </button>
            </div>
            <div className='my-5 flex flex-wrap  gap-3 border border-gray-300 p-4 '>
              <p className='text-base text-gray-800 font-medium'>Salary : {job.salary}</p>
              <div className='flex item-center gap-4 ' >
                <p className='text-base text-gray-800 font font-medium'>Job Location :</p>
                <p> {job.location}</p>
              </div>
            </div>
            <div className='my-1 flex flex-col gap-3 border border-gray-300 p-4'>
              <p className='text-xl text-gray-800 font-bold'>Job Overview</p>
              <div className='flex flex-wrap gap-2 items-center'>
                <p>Posted date : {job.postedDate}</p>
                <p>Job level : {job.level}</p>
                <p>Education : {job.education}</p>
                <p>Experience : {job.experience}</p>
              </div>
            </div>


          </div>
        </div>

      </div>

    </div>
  )
}

export default Jobdetails
