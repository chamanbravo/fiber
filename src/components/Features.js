import React from 'react'
import './Features.css'
import FeaturesPoints from './FeaturesPoints'
import time from '../assets/time.svg'
import code from '../assets/code.svg'
import allSizes from '../assets/allSizes.svg'

function Features() {
  const timeIcon = <img src={time} alt='time' className='fImg' />
  const codeIcon = <img src={code} alt='code' className='fImg' />
  const responsiveIcon = (
    <img src={allSizes} alt='responsive' className='fImg' />
  )

  return (
    <div className='container' id='features'>
      <div className='features-container'>
        <h4 className='pre-text'>Why Fiber?</h4>
        <h1 className='ftitle'>A good portfolio means good employability</h1>
        <div className='features-content'>
          <FeaturesPoints
            icon={timeIcon}
            heading='Build in minutes'
            paragraph='With a selection of premade templates, you can build out a portfolio in less than 10 minutes.'
          />
          <FeaturesPoints
            icon={codeIcon}
            heading='Add custom CSS'
            paragraph='Customize your personal portfolio even more with the ability to add you own custom CSS styles.'
          />
          <FeaturesPoints
            icon={responsiveIcon}
            heading='Responsive'
            paragraph='All fiber templates are fully responsive to ensure the experience is seemless across all devices.'
          />
        </div>
      </div>
    </div>
  )
}

export default Features
