    import React from 'react'
import Hero from '../components/Hero'
import Vacancies from '../components/Vacancies'
import Howworks from '../components/Howworks'
import Mostpopular from '../components/Mostpopular'
import Jobs from '../components/Jobs'
import Testimonial from '../components/Testimonial'
    
    const Home = () => {

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
    