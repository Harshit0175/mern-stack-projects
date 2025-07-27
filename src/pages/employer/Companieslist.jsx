import React, { useContext } from 'react'
import { Appcontext } from '../../context/Appcontext'
import toast from 'react-hot-toast';


const Companieslist = ({companies}) => {
  const { companydata, setcompanydata, navigate } = useContext(Appcontext);
  const handledelete = (id) => {
    const updatedcompanies = companydata.filter((company) => {
     return company._id !== id;

    });
    setcompanydata(updatedcompanies)
    toast.success("Company delete sucessfully")

  }
  return (
    <div className='max-w-4xl w-full px-6  mx-auto mt-10 bg-white shadow rounded -lg '>
      <div className='flex w-full items-center justify-between mb-6'>
        <h2 className='text-2xl  font-medium text-gray-800'>Company List</h2>
        <button onClick={() => navigate('/employer/add-company')} className='bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-900 cursor-pointer'>Add Company</button>
      </div>

      <table className='w-full border border-gray-300 rounded overflow-hidden'>
        <thead className='bg-gray-50'>
          <tr>
            <th className='text-left p-3 border-b'>Logo</th>
            <th className='text-left p-3 border-b'>Name</th>
            <th className='text-left p-3 border-b'>About</th>
            <th className='text-left p-3 border-b'>Delete</th>
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
              <td className='p-3 border-b'>
                <button
                  onClick={() => handledelete(company._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red cursor-pointer"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  )
}

export default Companieslist
