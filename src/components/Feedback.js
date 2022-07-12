import React from 'react'
import propTypes from 'prop-types'
import './Feedback.css'

function Feedback({ userImg, userName, revenue, fText, className }) {
  return (
    <div className={`feedback-box ${className}`}>
      <div className='user'>
        {userImg}
        <div className='user-info'>
          <h4 className='userName'>{userName}</h4>
          <p className='revenue'>{revenue}</p>
        </div>
      </div>
      <div className='feedback-text'>
        <p>{fText}</p>
      </div>
    </div>
  )
}

Feedback.propTypes = {
  userImg: propTypes.element.isRequired,
  userName: propTypes.string.isRequired,
  revenue: propTypes.string.isRequired,
  fText: propTypes.string.isRequired,
  className: propTypes.string,
}

export default Feedback
