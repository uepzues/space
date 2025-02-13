import { useEffect, useState } from 'react'
import logo from '../assets/Logo.png'
import '../components/Navigation.css'

export default function Navigation({ activePage }) {
  const navStyle = {
    'borderBottom': '2px solid white',
  }

  return (
    <div>
      <nav>
        <div className='navLogo'>
          <div className='logo'>
            <img
              src={logo}
              alt='logo'
            />
          </div>
          <div className='line'></div>
        </div>
        <ul className='navLinks'>
          <li style={activePage === '' ? navStyle : {}}>
            <a href='/'>
              <span>00</span> Home
            </a>
          </li>
          <li style={activePage === 'Destination' ? navStyle : {}}>
            <a href='/Destination'>
              <span>01</span> Destination
            </a>
          </li>
          <li style={activePage === 'Crew' ? navStyle : {}}>
            <a href='/Crew'>
              <span>02</span> Crew
            </a>
          </li>
          <li style={activePage === 'Technology' ? navStyle : {}}>
            <a href='/Technology'>
              <span>03</span> Technology
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
