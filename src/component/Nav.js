import React from 'react'
import { NavLink } from 'react-router-dom'
import {FiShoppingCart} from 'react-icons/fi'


const Nav = () => {
  return (
    <div className='navbar'>
      <ul>
        <li>
            <NavLink to="/"  className='navbar-link'>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/about" className='navbar-link'>
                About US
            </NavLink>
        </li>
        <li>
            <NavLink to="/contact" className='navbar-link'>
                Contact
            </NavLink>
        </li>
        <li>
            <NavLink to="/cart" className='navbar-link'>
                <FiShoppingCart />
            </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Nav
