import React from 'react'
import Button from './Button'
import './Sidebar.css'

function Sidebar({click, handleClick}) {

    return (
        <>
        <div className={click ? 'sidebar sidebar-active' : 'sidebar'} onClick={handleClick}>
                <div className="menu-items">
                    <div className="top-menu">
                        <ul>
                            <li onClick={handleClick}>Home</li>
                            <li onClick={handleClick}>Community</li>
                            <li onClick={handleClick}>Pricing</li>
                            <li onClick={handleClick}>Features</li>
                        </ul>
                    </div>
                    <div className="bottom-menu">   
                        <h3>Sign In</h3>
                        <Button className='btn-primary' text='Sign Up' Link='' />
                    </div>
                </div>
            </div>
            </>
    )
}

export default Sidebar
