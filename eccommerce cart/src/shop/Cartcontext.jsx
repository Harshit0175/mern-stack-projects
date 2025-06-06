import React ,{ createContext} from 'react'
import { useState,useEffect } from 'react';

export const createcontext=createContext();

export const CartProvider = ({children})=>{
  const [cart, setcart] = useState([]);
   useEffect(() => {
    
    const storedcart=localStorage.getItem('cart')
    if(storedcart){
      setcart(JSON.parse(storedcart))
    }}, [])
    function addtocart(product){
      let newcart=[...cart,product]
      setcart(newcart)
      localStorage.setItem('cart',JSON.stringify(newcart))


    }
  
  return(
    <createcontext.Provider value={addtocart}>
  {children}
</createcontext.Provider>
  )
}
