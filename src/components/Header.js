import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Sidebar from './Sidebar'
import './Header.css'
import Button from './Button'

function Header() {
  const [click, setclick] = useState(false)

  const handleClick = () => {
    setclick(!click)
  }

  return (
    <div className='header-container'>
      <div className='header-contents'>
        <h1 className='logo'>Gainmo</h1>
        <div className='menu-center'>
          <ul>
            <li>
              <Button className='btn-nav' text='Features' link='#features' />
            </li>
            <li>
              <Button className='btn-nav' text='Pricing' link='#pricing' />
            </li>
            <li>
              <Button className='btn-nav' text='Community' link='#community' />
            </li>
          </ul>
        </div>

        <h2 className='menu-icon' onClick={handleClick}>
          {click ? (
            <FaTimes style={{ color: '#fff' }} />
          ) : (
            <FaBars style={{ color: '#fff' }} />
          )}
        </h2>
      </div>
      <Sidebar click={click} handleClick={handleClick} />
    </div>
  )
}

export default Header
