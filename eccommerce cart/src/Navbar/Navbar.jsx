import React,{useContext} from 'react'
import "./style.css";
import { Link } from 'react-router-dom';
import { createcontext } from '../shop/Cartcontext'

function Navbar() {

  const {cart } = useContext(createcontext);

  return (
    <div className='container-fluid'>
        <div className='navbar'>
            <div className='logo'>
              <h2><Link to='/'>Cart App</Link></h2>
              </div>
        
        <div className='nav'>
            <ul className='nav-list'>
                <li className='navlink'><Link to='/cart-page'>Cart<sup>{cart.length}</sup></Link></li>
            </ul>
        </div>
        </div>
      
    </div>
  )
}

export default Navbar
 