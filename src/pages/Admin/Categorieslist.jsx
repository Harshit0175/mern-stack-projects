import React, { useContext } from 'react'
import { Appcontext } from '../../context/Appcontext'


const Categorieslist = () => {
  const {categoriesdata}=useContext(Appcontext)
  return (
    <div className='p-6 bg-white rounded shadow'>
      <h2 className='text-2xl font-semibold mb-6 text-gray-800'>
        All Categories
      </h2>
      <div className='overflow-x-auto'>
        <table className='min-w-full border border-gray-200 text-sm'>
        <thead className='bg-gray-50'>
          <tr>
            <th className='py-3 px-4 border-b'>Logo</th>
            <th className='py-3 px-4 border-b'> category Name</th>
            <th className='py-3 px-4 border-b'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categoriesdata.map((category,idx)=>{
              return(
                <tr key={idx} className='hover:bg-gray-50 border-b'>
                  <td className='py-3 px-4'>
                    <img src={category.icon} className='w-12 h-12 rounded object-cover border'/>
                  </td>
                  <td>
                    <p className='py-3 px-4 font-medium'> {category.name}</p>
                  </td>
                  <td className='py-3 px-4'>
                    <button className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 active:scale-95 cursor-pointer'>Delete</button>

                  </td>
                </tr>
              )

            })
          }
        </tbody>
</table>
      </div>

      
    </div>
  )
}

export default Categorieslist
