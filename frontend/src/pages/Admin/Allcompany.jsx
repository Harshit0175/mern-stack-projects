import React, { useContext } from 'react'
import { Appcontext } from '../../context/Appcontext'
import toast from 'react-hot-toast';


const Allcompany = () => {
  const { companydata, setcompanydata, navigate } = useContext(Appcontext);


  
  return(
    <div className='max-w-4xl w-full px-6  mx-auto mt-10 bg-white shadow rounded -lg '>
      <div className='flex w-full items-center justify-between mb-6'>
        <h2 className='text-2xl  font-medium text-gray-800'>Company List</h2>
      </div>

      <table className='w-full border border-gray-300 rounded overflow-hidden'>
        <thead className='bg-gray-50'>
          <tr>
            <th className='text-left p-3 border-b'>Logo</th>
            <th className='text-left p-3 border-b'>Name</th>
            <th className='text-left p-3 border-b'>About</th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-300'>
          {companydata.map((company) => (
            <tr key={company._id} className='hover:bg-green-50'>
              <td className='p-3 border-b'>
                <img src={company.logo} className="w-16 h-16 object-cover border" />
              </td>
              <td className='p-3 border-b'>{company.name}</td>
              <td className='p-3 border-b'>{company.about}</td>
              
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  )}


export default Allcompany
