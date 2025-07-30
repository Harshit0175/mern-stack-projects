import React from 'react'
import { vacancies } from '../assets/assets';

const Vacancies = () => {
    const tailwindColors = [
        "bg-red-200 text-red-800",
        "bg-orange-200 text-orange-800",
        "bg-yellow-200 text-yellow-800",
        "bg-lime-200 text-lime-800",
        "bg-green-200 text-green-800",
        "bg-purple-200 text-purple-800",
        "bg-teal-200 text-teal-800",
        "bg-sky-200 text-sky-800",
        "bg-blue-200 text-blue-800",
    

    ];

    return (
        <div className='py-16'>
            <h1 className='text-2xl mx-11 md:text-5xl font-semibold text-gray-800 text-center'>
                Most Popular Vacancies
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 '>
                {vacancies.map((item,index)=>{
                  const colors=tailwindColors[index%tailwindColors.length]
                    return(
                        <div key={index} className={`flex flex-col max-w-[250px] items-center justify-center gap-1 border border-gray-300 rounded-xl  my-4 mx-10 py-6 px-4 drop-shadow text-${colors} ${colors}`}>
                            <h3 className='text-lg font-semibold'>{item.title}</h3>
                            <p className='text-sm'>{item.count} open position</p>
                            
                        </div>
                    )

                })}

            </div>
        </div>
    )
}

export default Vacancies
