import React, { useEffect, useState } from 'react'
import sanityClient from '../client'
import Feedback from './Feedback'
import './Community.css'

function Community() {
  const [data, setData] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "testimonial"]{
          title,
          description,
          testimonials[]{
            image{
              asset->{
                url
              }
            },
            name,
            testimony
          } 
        }
        `
      )
      .then((data) => setData(data))
      .catch(console.error)
  }, [])

  return (
    <div className='community-container' id='community'>
      <div className='community-content'>
        <div className='testimonial-title'>
          <h1 className='gradient-title'>{data[0]?.title}</h1>
          <p>{data[0]?.description}</p>
        </div>
        {data[0]?.testimonials.map((testimonial, i) => {
          return (
            <Feedback
              key={i}
              userImg={testimonial.image.asset.url}
              userName={testimonial.name}
              fText={testimonial.testimony}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Community
