import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  return (
  <nav>
    <div className='nav-center'>
      <div class="nav-header">
        <img src={logo} alt="logo"/>
        <button className='nav-toggle'>
          <FaBars />
        </button>
      </div>
      <div class="links-container show-container">
        <ul class="links">
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">contacts</a>
          </li>
          <li>
            <a href="#">products</a>
          </li>
        </ul>
      </div>
        <ul className='social-icons'>
        <li>
          <a href="https://www.twitter.com"><FaTwitter/></a>
        </li>
        <li>
          <a href="https://www.twitter.com"><FaTwitter/></a>
        </li>
        <li>
          <a href="https://www.twitter.com"><FaTwitter/></a>
        </li>
        </ul>
    </div>
  </nav>
  )
}

export default Navbar
