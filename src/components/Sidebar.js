import React from 'react'
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
                        <a href="www.blah.com"><h4>Sign Up</h4></a>
                    </div>
                </div>
            </div>
            </>
    )
}

export default Sidebar
