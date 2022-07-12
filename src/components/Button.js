import React from 'react'
import propTypes from 'prop-types'
import './Button.css'

function Button({ className, text, link }) {
  return (
    <>
      <a href={link}>
        <button className={className}>{text}</button>
      </a>
    </>
  )
}

Button.propTypes = {
  className: propTypes.string,
  text: propTypes.string.isRequired,
  link: propTypes.string,
}

export default Button
