import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-content'>
        <div className='col col1'>
          <h3 className='footer-head'>Fiber</h3>
          <p className='footer-text'>
            With fiber, you can setup your own personal portfolio in minutes
            with dozens of premade, beautiful templates.
          </p>
          <p>Created by Chaman Bravo</p>
        </div>
        <div className='col col2'>
          <h3 className='footer-head'>Sitemap</h3>
          <ul className='footer-list'>
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>Home</p>
            </li>
          </ul>
        </div>
        <div className='col col3'>
          <h3 className='footer-head'>Resources</h3>
          <ul className='footer-list'>
            <li>
              <p>Contact</p>
            </li>
            <li>
              <p>Contact</p>
            </li>
            <li>
              <p>Contact</p>
            </li>
          </ul>
        </div>
        <div className='col col4'>
          <h3 className='footer-head'>Company</h3>
          <ul className='footer-list'>
            <li>
              <p>About</p>
            </li>
            <li>
              <p>About</p>
            </li>
            <li>
              <p>About</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
