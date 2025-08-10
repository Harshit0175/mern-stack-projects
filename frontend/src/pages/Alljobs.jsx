import React,{useContext} from 'react'
import { Appcontext } from '../context/Appcontext';
import Jobcard from '../components/Jobcard';

const Alljobs = () => {
  const { jobdata,query } = useContext(Appcontext);
   const filteredjobs =query? jobdata.filter((jobs)=>{
    return  jobs.title.toLowerCase().includes(query.toLowerCase( ))
   }):jobdata;
  return (
    <div className='py-16'>
      <h1 className='text-2xl md:text-5xl font-semibold text-gray-800 text-center'>
             Available Jobs
      </h1>
 
      <div className='my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center items-center'>
            {filteredjobs.map((item,idx)=>{
                return(
                  
                  <Jobcard key={idx} item={item} />
    
                )
            })}
            </div>
    </div>
    
  )
}

export default Alljobs
