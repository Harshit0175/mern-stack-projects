import React from 'react'
import { assets } from '../assets/assets'
import { heroData } from '../assets/assets'

const Hero = () => {
    return (
        <div className=' px-35 py-16 bg-[#f1f2f4]'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-5'>
                <div className='max-w-[450px] e-full flex flex-col px-4 gap-5'>
                    <h1 className='text-2xl md:text-5xl font-semibold text-gray-800'>
                     Find your dream job today.</h1>
                    <p className='text-sm  text-gray-700'>
                        {""}
                        Start your journey today and build the career you’ve always dreamed of.
                    </p>
                </div>

                <div>
                    <img src={assets.hero_img} />
                </div>
            </div>
            {/* hero data section */}
            <div className='flex flex-wrap items-center justify-center gap-2 mt-10  '>
                {heroData.map((item,idx)=>{
                    return(
                        <div  key={item._id} className='bg-white w-[270px] h-[112px] flex items-center gap-4 justify-center'>
                        <img src={item.icon}/>
                        <div className='flex flex-col gap-1'>
                            <p>{item.count}</p>
                            <p>{item.title}</p>
                        </div>
                        </div>
                    )

                })}
                
            </div>

        </div>

    )
}

export default Hero
