import React from 'react'
import Button from './Button'
import './Feedback.css'

function Feedback({userImg, userName, revenue, fText, btnText, className}) {
    return (
        <div className={`feedback-box ${className}`}>
            <div className='user'>
                {userImg}
                <div className="user-info">
                    <h4 className='userName'>{userName}</h4>
                    <p className='revenue'>{revenue}</p>
                </div>
            </div>
            <div className='feedback-text'>
                <p>{fText}</p>
            </div> 
            <Button className='btn-tertiary' text={btnText} Link='' />  
        </div>
    )
}

export default Feedback
