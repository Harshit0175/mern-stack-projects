import React,{createContext,useState} from 'react'

export const createcontext=createContext();

export const Cartprovider=({children})=>{
    const [cart, setcart] = useState([])
    return(
        <createcontext.Provider value={{cart,setcart}}>
        {children}
        </createcontext.Provider>
    )
}



