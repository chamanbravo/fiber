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
                <a href=''><h2>Fiber</h2></a>
                <div className="menu-center">
                    <ul>
                        <a href=''><li>Home</li></a>
                        <a href=''><li>Community</li></a>
                        <a href=''><li>Pricing</li></a>
                        <a href=''><li>Features</li></a>
                    </ul>
                </div>
                <div className="menu-right">   
                    <a href="#" className="signin-btn"><h4>Sign In</h4></a>
                    <Button className='btn-primary' text='Sign Up' link='' />
                </div>
                
                
                <h2 className="menu-icon" onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</h2>
            </div>
            <Sidebar click={click} handleClick={handleClick}/>
        </div>
    )
}

export default Header
