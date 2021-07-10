import React from 'react'
import './Button.css'

function Button({className, text, link}) {
  
    return (
        <>
            <a href={link}><button className={className} >{text}</button></a>
        </>
    )
}

export default Button
