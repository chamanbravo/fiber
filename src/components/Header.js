import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Sidebar from './Sidebar';
import './Header.css'
import Button from './Button';

function Header() {
    const [click, setclick] = useState(false);

    const handleClick = () => {setclick(!click)};

    return (
        <div className="header-container">
            <div className="header-contents">
                <h2>Fiber</h2>
                <div className="menu-center">
                    <ul>
                        <li>Home</li>
                        <li>Community</li>
                        <li>Pricing</li>
                        <li>Features</li>
                    </ul>
                </div>
                <div className="menu-right">   
                    <a href="#" className="signin-btn"><h4>Sign In</h4></a>
                    <Button className='btn-tertiary' text='Sign Up' link='' />
                </div>
                
                
                <h2 className="menu-icon" onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</h2>
            </div>
            <Sidebar click={click} handleClick={handleClick}/>
        </div>
    )
}

export default Header
