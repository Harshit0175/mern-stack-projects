 import React, { useContext,useState } from 'react'
import { Appcontext } from '../../context/Appcontext'
 
 const Addcategory = () => {
  const {navigate}=useContext(Appcontext)
  const [categorydata, setcategorydata] = useState({
    name:'',
    logo:null,
  })
  const [file, setfile] = useState(null)
  const [preview, setpreview] = useState(null);
  const handlechange = (e) => {
    setcategorydata({ ...categorydata, [e.target.name]: e.target.value })
  }
  const handlefilechange = (e) => {
    const selectedfile = e.target.files[0];
    setcategorydata({ ...categorydata, logo: selectedfile });
    if (selectedfile) {
      const imgurl = URL.createObjectURL(selectedfile)
      setpreview(imgurl)
    }
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log("categorydata", categorydata);
    navigate('/admin')

  };
   return (
     <div className='flex items-center max-w-4xl w-full mx-auto'>
       <form onSubmit={handlesubmit} className='bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-s rounded shadow-[0px_0px_10px_0px] shadow-black/10'> 
        <h2 className='text-2xl font-semibold mb-6 text-center text-gray-800'>
          Add New Category
        </h2>
         <div className='w-full my-4'>

          {preview && (
          <div className='mb-3 flex justify-center'>
            <img src={preview} alt="" className='w-24 h-24 object-cover rounded-full border shadow' />
          </div>
        )}
         <input
          type='file'
          accept='image/*'
          name='name'
          onChange={handlefilechange}
          className='block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-100 file:text-sky-600 file:cursor-pointer cursor-pointer pb-5'
        />
        <label htmlFor='name'>Category Name</label>
        <input
          type='text'
          value={categorydata.name}
          onChange={handlechange}
          name="company" placeholder='enter category name'
          className='w-full border mt-1 border-gray-500/30 focus:border-sky-600 outline-none rounded py-2.5 px-4 mb-4'
        />
        <button type='submit' className='w-full my-3 bg-sky-600 active:scale-95 transition py-2.5 rounded text-white cursor-pointer'> Add category</button>



        </div>

       </form>
     </div>
   )
 }
 
 export default Addcategory
 