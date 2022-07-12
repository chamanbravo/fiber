import React from 'react'
import Button from './Button'
import pageImage from '../assets/Page Image.png'
import './About.css'

function About() {
  return (
    <>
      <div className='hero-container' id='hero'>
        <div className='hero-content'>
          <div className='hero-text'>
            <h1 className='title-text'>Create your portfolio in minutes.</h1>
            <p className='desc-text'>
              With fiber, you can setup your own personal portfolio in minutes
              with dozens of premade, beautiful templates.
            </p>
            <div className='button'>
              <Button
                className='btn-primary btn1'
                text='Start Free Trial'
                link='/'
              />
            </div>
          </div>
          <div className='hero-img'>
            <img src={pageImage} alt='hero' className='hero-illustration' />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
