import React from 'react'
import '../styles/Nav.css'

const Nav = () => {
  return (
    <div className = 'top'>
        <div className='logo'>
            <h1>Satis-foodie</h1>
        </div>
        <div className='links'> 
            <a href='/'>Home</a>
            <a href='/'>products</a>
            <a href='/'>Categories</a>
            <a href='/'>About us</a>
        </div>
        <div className='orders'>
            <button>Cart</button>
        </div>
    </div>
  )
}

export default Nav