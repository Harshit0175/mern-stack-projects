import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar/Navbar'
import { Routes,Route } from 'react-router'
import Home from './components/Home'
import Cartlist from './shop/Cartlist'
import { Cartprovider } from './shop/Cartcontext'




function App() {
  const [count, setCount] = useState(0)

  return (
    <Cartprovider>
    
      <Navbar/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/cart-page' Component={Cartlist} />

      </Routes>

    </Cartprovider>
  )
}

export default App
