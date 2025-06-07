import React from 'react'
import { useContext } from 'react'
import { createcontext } from './Cartcontext'



function Cartlist() {
  const { cart,setcart} = useContext(createcontext);
  return (
    <div>
      {cart.map((cartitem , cartkey)=>{
        return(
            <div key={cartkey} style={{width:'33.3%' , display:"flex"}}>
              <img src={cartitem.image} width={'30%'}/>
                <p> {cartitem.title} | {cartitem.category}</p>      
                <p>Rate:{cartitem.rating.rate} |  Rating count:{cartitem.rating.count}</p>
                <button style={{height:'25px', width:'50px'}} onClick={()=>{
                  const carts=cart.map((item,index)=>{
                    return cartkey=== index?{...item , Quantity : item.Quantity>0 ? item.Quantity-1:0}:item ;
                  })
                    setcart(carts)

                }}>-</button>
                <p>{cartitem.Quantity}</p> 
                <button style={{height:'25px', width:'50px'}} onClick={()=>{
                  const carts=cart.map((item,index)=>{
                    return cartitem===item?{...item , Quantity : item.Quantity+1}:item ;
                  })
                    setcart(carts)

                }}>+</button>

                <p>${cartitem.price*cartitem.Quantity}/-</p>

              </div>   
        )
      })}
      <p>Total :$
         { cart.map(item=>item.price*item.Quantity).reduce((total,value)=>total+value,0)}
      </p>
    </div>
  )
}

export default Cartlist
