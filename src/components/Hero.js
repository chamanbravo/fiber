import React from 'react'
import Button from './Button'
import heroImg from '../assets/hero-illustration.png'
import blob from '../assets/blob.png'
import blobRT from '../assets/blobRT.png'
import './Hero.css'

function Hero() {
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
            <img src={heroImg} alt='hero' className='hero-illustration' />
          </div>
        </div>

        <img src={blob} alt='gradient-blob' className='gradient-blob__img' />
        <img
          src={blobRT}
          alt='gradient-blob'
          className='gradient-blob__imgRT'
        />
      </div>
    </>
  )
}

export default Hero
