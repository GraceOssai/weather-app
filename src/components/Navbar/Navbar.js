import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h2>logo</h2>
      <input type="text" placeholder='Weather in your city...' />
      <div className='timely-weather'>
        <a href="#">Today</a>
        <a href="#">Hourly</a>
        <a href="#">10-day</a>
        <a href="#">Monthly</a>
      </div>
    </div>
  )
}

export default Navbar