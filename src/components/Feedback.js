import React from 'react'
import propTypes from 'prop-types'
import './Feedback.css'

function Feedback({ userImg, userName, fText }) {
  return (
    <div className='feedback-box'>
      <div className='user'>
        <div className='user__img'>
          <img src={userImg} alt={userName} />
        </div>
        <h4 className='userName'>{userName}</h4>
      </div>
      <div className='feedback-text'>
        <p>{fText}</p>
      </div>
    </div>
  )
}

Feedback.propTypes = {
  userImg: propTypes.string.isRequired,
  userName: propTypes.string.isRequired,
  fText: propTypes.string.isRequired,
}

export default Feedback
