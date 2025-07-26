import React, { useContext } from 'react'
import { Appcontext } from '../../context/Appcontext';

const Myapplication = () => {
  const { jobdata ,navigate } = useContext(Appcontext);
  
  return (
    <div className='py-16 px-4 max-w-7xl mx-auto bg-gradient-to-b from-gray-200/70'>
      <h1 className='text-2xl md:text-5xl font-medium text-gray-800 mb-8 text-center'> Applied Jobs</h1>
      {!jobdata || jobdata.length === 0 ? <div>
        <div className='text-gray-400 text-lg'>No applied jobs found</div>
        <p className='text-gray-400 mt-4'>{""}It seems you haven't applied for any jobs yet.</p>
      </div> :
        <div className='bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden'>
          <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead bg-gray-50>
                <tr>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Job Details</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Company</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Type</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'> Salary</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'> Status</th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {jobdata.map((job) => (
                  <tr onClick={()=>{navigate(`/job/${job.id}`)}} key={job.id} className='hover:bg-gray-50 cursor-pointer transition-colors '>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm font-medium text-gray-900'>{job.title}</div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm font-medium text-gray-900'>{job.company}</div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm font-medium text-gray-900'>{job.type}</div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm font-medium text-gray-900'>{job.salary}</div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className={`text-sm font-medium`}>{job.status || "pending"}</div>
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
 
        </div>}

        </div>
      



    
  )
}

export default Myapplication
