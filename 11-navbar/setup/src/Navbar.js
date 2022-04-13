import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)

  return (
  <nav>
    <div className='nav-center'>
      <div class="nav-header">
        <img src={logo} alt="logo"/>
        <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
          <FaBars />
        </button>
      </div>
      <div class={`${showLinks ? 'show-container links-container' : 'links-container'}`}>
        <ul class="links">
          {links.map((link) => {
            const {id, url, text} = link
            return (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
            )
          })}
        </ul>
      </div>  
    </div>
  </nav>
  )
}

export default Navbar
