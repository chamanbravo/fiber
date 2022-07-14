import React from 'react'
import propTypes from 'prop-types'

function FeaturesPoints({ icon, heading, paragraph }) {
  return (
    <div className='features-points' style={{}}>
      <img src={icon} alt={heading} />
      <h4 style={{ margin: '0.8rem 0', fontSize: '1.2rem' }}>{heading}</h4>
      <p>{paragraph}</p>
    </div>
  )
}

FeaturesPoints.propTypes = {
  icon: propTypes.string.isRequired,
  heading: propTypes.string.isRequired,
  paragraph: propTypes.string.isRequired,
}

export default FeaturesPoints
