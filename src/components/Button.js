import React from 'react'
import './Button.css'

function Button({className, text, link}) {
    return (
        <>
            <button className={className} href={link}>{text}</button>
        </>
    )
}

export default Button
