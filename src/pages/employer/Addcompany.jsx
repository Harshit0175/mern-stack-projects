import React, { useContext,useState} from 'react'
import { Appcontext } from '../../context/Appcontext'


const Addcompany = () => {
  const { navigate } = useContext(Appcontext)
  const [compdata, setcompdata] = useState({
    name: "",
    about: "",
    logo: null,
  });
  const [preview, setpreview] = useState(null);
  const handlechange = (e) => {
    setcompdata({ ...compdata, [e.target.name]: e.target.value })
  }
  const handlefilechange = (e) => {
    const selectedfile = e.target.files[0];
    setcompdata({ ...compdata, logo: selectedfile });
    if (selectedfile) {
      const imgurl = URL.createObjectURL(selectedfile)
      setpreview(imgurl)
    }
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log("companydata", compdata);
    navigate('/employer')

  };
  return (
    <div className='flex item-center  mx-auto max-w-4xl w-full '>
      <form onSubmit={handlesubmit} className='bg-white  text-gray-500 max-w-5xl w-full mx-40  my-5 md:p-6 p-4 text-left text-s rounded- shadow-[10px 10px 0px 10px 10px] shadow black/10'>
        <h2 className='text-2xl  font-medium text-gray-800 text-center'> Register a new company</h2>
        <div className='w-full my-4 '>
          {preview && (
            <div className='mb-3 flex justify-center '>
              <img src={preview} alt=""  className='w-24 h-24 object-cover rounded-full border shadow'/>
            </div>
          )}
          <input
          type='file'
          accept='image/*'
          onChange={handlefilechange}
          className=' file:items-center block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-100 file:text-sky-600 file:cursor-pointer cursor-pointer' 
          />
        </div>
        <label htmlFor='name'>Company Name</label>
        <input
        type='text'
        value={compdata.name}
        onChange={handlechange}
        name="name" placeholder='enter name'
        className='w-full border mt-1 border-gray-500/30 focus:border-sky-600 outline-none rounded py-2.5 px-4'
        />
        <div className='mb-4'>
          <label htmlFor='about'>About</label>
          <textarea 
          rows='4'
          value={compdata.about}
          onChange={handlechange}
          name='about'
          placeholder='Enter about'
          className='w-full border mt-1 border-gray-500/30 focus:border-sky-600 outline-none rounded py-2.5 px-4'
          />
          <button type='submit' className='w-full my-3 bg-sky-600 active:scale-95 transition py-2.5 rounded text-white cursor-pointer'> Add Company</button>

        </div>
      </form>

    </div>
  )
}

export default Addcompany
