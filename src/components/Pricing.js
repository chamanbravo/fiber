import React from 'react'
import Button from './Button'
import './Pricing.css'

function Pricing() {
  return (
    <div className='pricing-wrapper'>
      <div className='pricing-box basic-plan'>
        <div className='pricing-title title-1'>
          <h3>Basic</h3>
        </div>
        <div className='pricing-price '>
          <h3>50$</h3>
          <p>/mo</p>
        </div>
        <p className='pricing-features'>
          Great for small teams Great for small teams Great for small teams
          Great for small teams
        </p>
        <Button className='btn-tertiary' text='Get Started' Link='' />
        <ul className='featues-available'>
          <li className='inline-flex'>
            <span>✅</span>
            <p>Yo cha</p>
          </li>
          <li className='inline-flex'>
            <span>❎</span>
            <p>Yo chaina</p>
          </li>
          <li className='inline-flex'>
            <span>❎</span>
            <p>Yo chaina</p>
          </li>
        </ul>
      </div>

      <div className='pricing-box basic-plan'>
        <div className='pricing-title title-2'>
          <h3>Lite</h3>
        </div>
        <div className='pricing-price'>
          <h3>50$</h3>
          <p>/mo</p>
        </div>
        <p className='pricing-features'>
          Great for small teams Great for small teams Great for small teams
          Great for small teams
        </p>
        <Button className='btn-tertiary' text='Get Started' Link='' />
        <ul className='featues-available'>
          <li className='inline-flex'>
            <span>✅</span>
            <p>Yo cha</p>
          </li>
          <li className='inline-flex'>
            <span>❎</span>
            <p>Yo chaina</p>
          </li>
          <li className='inline-flex'>
            <span>❎</span>
            <p>Yo chaina</p>
          </li>
        </ul>
      </div>

      <div className='pricing-box basic-plan'>
        <div className='pricing-title title-3'>
          <h3>Pro</h3>
        </div>
        <div className='pricing-price'>
          <h3>50$</h3>
          <p>/mo</p>
        </div>
        <p className='pricing-features'>
          Great for small teams Great for small teams Great for small teams
          Great for small teams
        </p>
        <Button className='btn-tertiary' text='Get Started' Link='' />
        <ul className='featues-available'>
          <li className='inline-flex'>
            <span>✅</span>
            <p>Yo cha</p>
          </li>
          <li className='inline-flex'>
            <span>❎</span>
            <p>Yo chaina</p>
          </li>
          <li className='inline-flex'>
            <span>❎</span>
            <p>Yo chaina</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Pricing
