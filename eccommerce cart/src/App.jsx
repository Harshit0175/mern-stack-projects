import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar/Navbar'
import { Routes,Route } from 'react-router'
import Home from './components/Home'
import Cartpage from './shop/Cartpage'
import { CartProvider } from './shop/Cartcontext'



function App() {
  const [count, setCount] = useState(0)

  return (
    <CartProvider>
    
      <Navbar/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/cart-page' Component={Cartpage}/>

      </Routes>

    </CartProvider>
  )
}

export default App
