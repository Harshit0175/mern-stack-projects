import React from 'react'
import { HowWorks } from '../assets/assets.js'

const Howworks = () => {
    return (
        <div className='py-16 bg-[#f1f2f4]'>
            <h1 className='text-2xl mx-11 md:text-5xl font-semibold text-gray-800 text-center'>
                How It Works
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 items-center justify-center'>
                {HowWorks.map((item, index) => {
                    return(
                        <div key={index} className='flex flex-col items-center justify-between gap-4'>
                            <img src={item.icon} />
                           <div className='flex flex-col items-center justify-center '>
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Howworks
