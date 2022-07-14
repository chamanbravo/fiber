import React, { useEffect, useState } from 'react'
import sanityClient from '../client'
import Button from './Button'
import './About.css'

function About() {
  const [data, setData] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "about"]{
      title,
      description,
      image{
        asset->{
          url
        }
      }
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
      </div>
    </>
  )
}

export default About
