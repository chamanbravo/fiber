import React, { useState, useEffect } from 'react'
import sanityClient from '../client'
import Button from './Button'
import blob from '../assets/blob.png'
import './Hero.css'

function Hero() {
  const [data, setData] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "hero"]{
      title,
      description,
      image{
        asset->{
          url
        },
      },
    }`
      )
      .then((data) => setData(data))
      .catch(console.error)
  }, [])

  return (
    <>
      <div className='hero-container' id='hero'>
        <div className='hero-content'>
          <div className='hero-text'>
            <h1 className='title-text'>{data[0]?.title}</h1>
            <p className='desc-text'>{data[0]?.description}</p>
            <div className='button'>
              <Button
                className='btn-primary btn1'
                text='Start Free Trial'
                link='/'
              />
            </div>
          </div>
          <div className='hero-img'>
            <img
              src={data[0]?.image?.asset?.url}
              alt='hero'
              className='hero-illustration'
            />
          </div>
        </div>

        <img src={blob} alt='gradient-blob' className='gradient-blob__img' />
      </div>
    </>
  )
}

export default Hero
