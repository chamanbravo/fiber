import React, { useEffect, useState } from 'react'
import sanityClient from '../client'
import Button from './Button'
import './Pricing.css'

function Pricing() {
  const [data, setData] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "pricing"]{
          prices
        }`
      )
      .then((data) => setData(data))
      .catch(console.error)
  }, [])

  return (
    <div className='pricing-wrapper'>
      {data[0]?.prices.map((price, index) => {
        return (
          <div className='pricing-box basic-plan' key={index}>
            <div className={`pricing-title title-${index}`}>
              <h3>{price.title}</h3>
            </div>
            <div className='pricing-price'>
              <h3>{price.price}$</h3>
              <p>/mo</p>
            </div>
            <p className='pricing-features'>{price.description}</p>
            <Button className='btn-tertiary' text='Get Started' Link='' />
            <ul className='featues-available'>
              {price.features.map((feature, index) => {
                return (
                  <li className='inline-flex' key={index}>
                    <span>✅</span>
                    <p>{feature}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Pricing
