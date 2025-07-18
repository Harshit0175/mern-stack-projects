    import React, { use, useContext, useEffect } from 'react'
import Hero from '../components/Hero'
import Vacancies from '../components/Vacancies'
import Howworks from '../components/Howworks'
import Mostpopular from '../components/Mostpopular'
import Jobs from '../components/Jobs'
import Testimonial from '../components/Testimonial'
import { Appcontext } from '../context/Appcontext'
    
    const Home = () => {
      const {setquery}=useContext(Appcontext);
      useEffect(() => {
        setquery("");
      },[setquery]);

      return (
        <div>
         <Hero/>
         <Vacancies/>
         <Howworks/>
         <Mostpopular/>
         <Jobs/>
          <Testimonial/>
        </div>
      )
    }
    
    export default Home
    