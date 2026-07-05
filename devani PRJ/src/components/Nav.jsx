import React from 'react'
import Logo from './Logo'
import './Logo.css' 

const Nav = () => {
  return (
    <nav className="navbar">
      <Logo />
      <ul className="nav-links">
        <li><a href="#home" className="nav-item">Home</a></li>
        <li><a href="#skills" className="nav-item">Skills</a></li>
        <li><a href="#about" className="nav-item">About</a></li>
      </ul>
    </nav>
  )
}

export default Nav