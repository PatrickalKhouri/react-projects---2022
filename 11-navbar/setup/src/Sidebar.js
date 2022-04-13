import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { social } from './data'

const Sidebar = () => {
  return (
    <ul class="social-icons">
    {social.map((socialIcon) => {
      const {id, url, icon} = socialIcon
      return (
      <li key={id}>
        <a href={url}>{icon}</a>
      </li>
      )
    })}
    </ul>
  )
}

export default Sidebar
