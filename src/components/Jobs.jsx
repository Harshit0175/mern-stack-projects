import React,{useContext} from 'react'
import { Appcontext } from '../context/Appcontext';


const Jobs = () => {
    const { jobdata } = useContext(Appcontext);

  return (
    <div className='py-16 '>
      <h1 className='text-2xl md:text-5xl font-semibold text-gray-800 text-center'>Featured Jobs</h1>
      <div>
        {jobdata.map((item,idx)=>{
            return(
                <div key={idx} className=''>
                    <img src={item.image} alt="" />
                    <h3>{item.title}</h3>
                    <h4>{item.company}</h4>
                    <p>{item.description}</p>
                    <p>{item.location}</p>
                    <p>{item.salary}</p>    

                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Jobs
