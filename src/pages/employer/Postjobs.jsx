import React, { useContext, useState } from 'react'
import { Appcontext } from '../../context/Appcontext';


const Postjobs = () => {
  const {navigate}=useContext(Appcontext)
  const [jobdata, setjobdata] = useState({
    title: '',
    company: '',
    description: '',
    location: '',
    salary: '',
    type: '',
    image: null,
    requirements: '',
    benefits: '',
    joblevel: '',
    education: '',
    experience: '',
  })
  const [preview, setpreview] = useState(null);
  const handlechange = (e) => {
    setjobdata({ ...jobdata, [e.target.name]: e.target.value })
  }
  const handlefilechange = (e) => {
    const selectedfile = e.target.files[0];
    setjobdata({ ...compdata, logo: selectedfile });
    if (selectedfile) {
      const imgurl = URL.createObjectURL(selectedfile)
      setpreview(imgurl)
    }
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log("jobsdata", jobdata);
    navigate('/employer/job-list')

  };
  return (
    <div className='flex item-center  mx-auto  '>
      <form onSubmit={handlesubmit} className='bg-white  text-gray-500  max-w-5xl w-full mx-40 md:p-6 p-4 text-left text-s rounded shadow-[0px 0px 10px 0px] shadow black/10'>
        <h2 className='text-4xl  text-center font-medium text-gray-800'> Post a new job</h2>
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
        <label htmlFor='name'>Job Title</label>
        <input
          type='text'
          value={jobdata.title}
          onChange={handlechange}
          name="title" placeholder='enter job title'
          className='w-full border mt-1 border-gray-500/30 focus:border-sky-600 outline-none rounded py-2.5 px-4 mb-4'
        />
        <label htmlFor='name'>Company Name</label>
        <input
          type='text'
          value={jobdata.name}
          onChange={handlechange}
          name="company" placeholder='enter name'
          className='w-full border mt-1 border-gray-500/30 focus:border-sky-600 outline-none rounded py-2.5 px-4 mb-4'
        />
        <label htmlFor='name'>Job Description</label>

        <textarea
          rows='3'
          value={jobdata.description}
          onChange={handlechange}
          name='description'
          placeholder='describe the job role'
          className='w-full border mt-1 border-gray-500/30 focus:border-sky-600 outline-none rounded py-2.5 px-4 mb-4'
        />
        <label htmlFor='text'>Location</label>
        <input
          type='text'
          value={jobdata.location}
          onChange={handlechange}
          name="location" placeholder='enter Location'
          className='w-full border mt-1 border-gray-500/30 focus:border-sky-600 outline-none rounded py-2.5 px-4 mb-4'
        />
        <label htmlFor='S'>Salary</label>
        <input
          type='text'
          
          value={jobdata.salary}
          onChange={handlechange}
          name="salary" placeholder='enter Salary'
          className='w-full border mt-1 border-gray-500/30 focus:border-sky-600 outline-none rounded py-2.5 px-4 mb-4'
        />

        <label htmlFor='name'> Job Type</label>
        <select
          value={jobdata.type}
          onChange={handlechange}
          name="type"
          className='w-full border mt-1 border-gray-500/30 focus:border-sky-600 outline-none rounded py-2.5 px-4 mb-4'>

          <option value="">Select Type</option>
          <option value="full-time">full-time</option>
          <option value="part-time">Part-time</option>
          <option value="remote">Remote</option>
          <option value="internships">Internships</option>
        </select>

        <label htmlFor='name'>Requirements</label>
        <textarea
          type='text'
          value={jobdata.requirements}
          onChange={handlechange}
          name="requirements" placeholder='enter Salary'
          className='w-full border mt-1 border-gray-500/30 focus:border-sky-600 outline-none rounded py-2.5 px-4 mb-4'
          rows='2'
        />
        <label htmlFor='name'>Benefits</label>
        <textarea
          value={jobdata.benefits}
          onChange={handlechange}
          name="benefits" placeholder='Seperate with commas'
          className='w-full border mt-1 border-gray-500/30 focus:border-sky-600 outline-none rounded py-2.5 px-4 mb-4'
          rows='2'
        />

        <label htmlFor='name'>Job Level</label>
        <textarea
          type='text'
          value={jobdata.joblevel}
          onChange={handlechange}
          name="joblevel" placeholder='e.g. Senior,Mid-level'
          className='w-full border mt-1 border-gray-500/30 focus:border-sky-600 outline-none rounded py-2.5 px-4 mb-4'
          rows='2'
        />
        <label htmlFor='name'>Education</label>
        <textarea
          type='text'
          value={jobdata.education}
          onChange={handlechange}
          name="education" placeholder="e.g. Bachelor's Degree"
          className='w-full border mt-1 border-gray-500/30 focus:border-sky-600 outline-none rounded py-2.5 px-4 mb-4'
          rows='2'
        />
        <label htmlFor='name'>Experience</label>

        <textarea
          type='text'
          value={jobdata.experience}
          onChange={handlechange}
          name="experience" placeholder="e.g. 3 years"
          className='w-full border mt-1 border-gray-500/30 focus:border-sky-600 outline-none rounded py-2.5 px-4 mb-4'
          rows='2'
        />
        <button type='submit' className='w-full my-3 bg-sky-600 active:scale-95 transition py-2.5 rounded text-white cursor-pointer'> Post Job</button>




      </form>
    </div>
  )
}

export default Postjobs
