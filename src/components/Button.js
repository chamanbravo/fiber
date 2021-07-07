import React from 'react'
import './Button.css'

function Button({className, text, link}) {
    return (
        <div>
            <a href={link}><h4 className={className}>{text}</h4></a>
        </div>
    )
}

export default Button
