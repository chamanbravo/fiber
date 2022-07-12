import React from 'react'
import propTypes from 'prop-types'
import Button from './Button'
import './Sidebar.css'

function Sidebar({ click, handleClick }) {
  return (
    <>
      <div
        className={click ? 'sidebar sidebar-active' : 'sidebar'}
        onClick={handleClick}
      >
        <div className='menu-items'>
          <div className='top-menu'>
            <ul>
              <li>
                <Button
                  className='btn-nav'
                  text='Home'
                  link='#home'
                  onClick={handleClick}
                />
              </li>
              <li>
                <Button
                  className='btn-nav'
                  text='Features'
                  link='#features'
                  onClick={handleClick}
                />
              </li>
              <li>
                <Button
                  className='btn-nav'
                  text='Pricing'
                  link='#pricing'
                  onClick={handleClick}
                />
              </li>
              <li>
                <Button
                  className='btn-nav'
                  text='Community'
                  link='#community'
                  onClick={handleClick}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

Sidebar.propTypes = {
  click: propTypes.bool.isRequired,
  handleClick: propTypes.func.isRequired,
}

export default Sidebar
