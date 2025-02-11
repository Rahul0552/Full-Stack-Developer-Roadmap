import React from 'react'
import '../style.css'
import Logo from '../assets/logo.jpg'

const Header = () => {
  return (
    <div className="Header_pg">
      <div className="logo-container">
        <img src={Logo} alt="Full Stack Developer Logo" className="logo" />
      </div>
      <div className="title-container">
        <h1>Full Stack Developer Roadmap</h1>
      </div>
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search courses..." 
          className="search-bar"
        />
        <button className="search-button">Search</button>
      </div>
    </div>
  )
}

export default Header
