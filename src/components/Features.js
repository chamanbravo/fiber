import React from 'react'
import './Features.css'
import FeaturesPoints from './FeaturesPoints'

import time from '../Assets/time.svg'
import code from '../Assets/code.svg'
import allSizes from '../Assets/allSizes.svg'

function Features() {
    const timeIcon = <img src={time} alt='time' className='fImg' />
    const codeIcon = <img src={code} alt='code' className='fImg' />
    const responsiveIcon = <img src={allSizes} alt='responsive' className='fImg' />

    return (
        <div className='container'>
            <div className='features-container'>
                <h4 className='pre-text'>Why Fiber?</h4>
                <h1 className='ftitle'>A good portfolio means good employability</h1>
                <div className='features-content'>
                    <FeaturesPoints icon={timeIcon} heading='Build in minutes' paragraph='With a selection of premade templates, you can build out a portfolio in less than 10 minutes.' />
                    <FeaturesPoints icon={codeIcon} heading='Build in minutes' paragraph='With a selection of premade templates, you can build out a portfolio in less than 10 minutes.' />
                    <FeaturesPoints icon={responsiveIcon} heading='Build in minutes' paragraph='With a selection of premade templates, you can build out a portfolio in less than 10 minutes.' />
                </div>
            </div>
        </div>
    )
}

export default Features
