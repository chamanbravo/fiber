import React, { useEffect, useState } from 'react'
import sanityClient from '../client'
import './ContactUs.css'

function ContactUs() {
  const [data, setData] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "contact"]{
          title,
          subTitle,
          email
        }`
      )
      .then((data) => setData(data))
      .catch(console.error)
  }, [])

  return (
    <div className='contact-wrapper'>
      <h1 className='contact-header'>{data[0]?.title}</h1>
      <div>
        <h3 className='contactus-text'>{data[0]?.subTitle}</h3>
        <h1 className='contactus-text'>{data[0]?.email}</h1>
      </div>
    </div>
  )
}

export default ContactUs
