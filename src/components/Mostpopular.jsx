import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext';

const Mostpopular = () => {
    const tailwindColors = [
        "bg-red-200 text-red-800",
        "bg-orange-200 text-orange-800",
        "bg-yellow-200 text-yellow-800",
        "bg-lime-200 text-lime-800",
        "bg-green-200 text-green-800",
        "bg-teal-200 text-teal-800",
        "bg-sky-200 text-sky-800",
        "bg-purple-200 text-purple-800",
        "bg-blue-200 text-blue-800",

    ];
    const { categoriesdata } = useContext(Appcontext);

    return (
        <div className='py-16 '>
            <h1 className='text-2xl mx-11 md:text-5xl font-semibold text-gray-800 text-center'>
                Most Popular Categories
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10'>
                {categoriesdata.map((item, index) => {
                    const colors = tailwindColors[index % tailwindColors.length]

                    return (
                        <div key={index} className={` cursor-pointer flex  max-w-[250px] items-center justify-center gap-2 border border-gray-300 rounded-xl my-4 mx-10 py-6 px-4 drop-shadow ${colors} `}>
                            <img src={item.icon} />
                            <div className='flex flex-col items-center justify-center'><h1>{item.name}</h1>
                                <p>{item.positions} open positions</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Mostpopular
