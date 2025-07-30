import React, { useContext } from 'react'
import { Appcontext } from '../../context/Appcontext'


const Allapplications = () => {
  const {applicant}=useContext(Appcontext)


  return (
    <div className='py-16 px-4 max-w-7xl mx-auto bg-gradient-to-b from-gray-300/70'>
      <h1 className='text-2xl md:text-5xl font-medium text-gray-800 mb-8 text-center'> All Applicants</h1>
      {!applicant || applicant.length === 0 ? <div>
        <div className='text-gray-400 text-lg'>No Applicants Found</div>
       
      </div> :
        <div className='bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden'>
          <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-200 '>
              <thead className='bg-gray-50 '>
                <tr>
                  <th className='px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider text-center'>Name</th>
                  <th className='px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider text-center'>Email</th>
                  <th className='px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider text-center'>Phone no.</th>
                  <th className='px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider text-center'> Applied Job</th>
                  <th className='px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider text-center'> Application Date</th>
                  <th className='px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider text-center'>Resume</th>
                <th className='px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider text-center'> Status</th>

                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200 text-center'>
                {applicant.map((item ,idx) => (
                  <tr key={idx}   className='hover:bg-gray-50 cursor-pointer transition-colors '>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm font-medium text-gray-900'>{item.name}</div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm font-medium text-gray-900'>{item.email}</div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm font-medium text-gray-900'>{item.phone}</div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm font-medium text-gray-900'>{item.appliedJob}</div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm font-medium text-gray-900'>{item.applicationDate}</div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-center'>
                      <div className='text-sm semibold text-gray-900'>{item.resume}</div>
                    </td> 
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className={` inline-flex px-2 py-1 text-xs font-semibold`}>{item.status || "pending"}</div>
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

export default Allapplications
