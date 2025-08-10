import React from 'react'
import { assets } from '../assets/assets'; 

const About = () => {
  return (
    <div className='py-16 px-4 max-w-7xl mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
      {/* left section */}
      <div>
        <img src={assets.hero_img} alt="" />
         </div>

        {/* right section */}
        <div className='text-xl font-serif text-gray-800 '>
          <h1 className='text-3xl font-extrabold text-gray-800 py-6 text-center'>About Our Job Finder</h1>
          <p className='text-gray-600 mb-4 leading-relaxed'
          >{''} We are dedicated to connecting job seekers with their dream jobs. Our platform offers a wide range of job listings from various industries, making it easy for you to find the perfect fit for your skills and interests. </p>
          <p className='text-gray-600 leading-relaxed'
          >{''} Our team is committed to providing the best experience for both job seekers and employers. We strive to make the job search process as smooth and efficient as possible, with user-friendly features and personalized support.</p>
        </div>
      </div>
      <div className='mt-12 bg-gray-100 rounded-xl p-6 shadow-inner'>
        <h3 className='text-3xl text-gray-700 mb-3 font-semibold  '>Why Choose Us?</h3>
        <p className='text-gray-600 leading-relaxed'>
          Thousands of job seekers trust us to help them find their ideal job.
          <br/>
          Easy Application Process<br/> Personalized job recommendations<br/> Access to exclusive job listings<br/> Support from our dedicated team
        </p>
     
    </div>
    </div>
  )
}

export default About
