import React from 'react'
import star from '../Assets/star.svg'
import Button from './Button'
import checkmark from '../Assets/Checkmark.svg'
import mainimg from '../Assets/hero-Illustration.png'
import './Hero.css'

function Hero() {
  const review = <img src={star} alt='review' className='star' />
  const check = <img src={checkmark} alt='checkmark' className='checkmark' />
  const heroimg = <img src={mainimg} alt='hero-illustration' className='hero-illustration' />

    return (
        <>
          <div className='hero-container'>
              <div className='hero-content'>
                <div className='hero-text'>
                  <div className="review">
                    {review}
                    {review}
                    {review}
                    {review}
                    {review}
                    <p className="review-text">Rated 4.6/5 (243 reviews)</p>
                  </div>
                  <h1 className='title-text'>Create your portfolio in minutes.</h1>
                  <p className='desc-text'>With fiber, you can setup your own personal portfolio in minutes with dozens of premade, beautiful templates.</p>
                  <div className="button">
                    <Button className='btn-primary' text='Start Free Trial' link='' />
                    <Button className='btn-simple' text='View Examples' link='' />
                  </div>
                  <div className="checkList">
                    <p className='cp1 checkpoints'>{check} No Credit Card Required</p>
                    <p className='cp2 checkpoints'>{check} 10 free samples</p>
                  </div>
                </div>
                <div className='hero-img'>
                  {heroimg}
                </div>
              </div>
          </div>  
        </>
    )
}

export default Hero
