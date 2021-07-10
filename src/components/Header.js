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
             <Button className='btn-nav boldText' text='Fiber' link='#home' />
                <div className="menu-center">
                    <ul>
                        <li><Button className='btn-nav' text='Features' link='#features' /></li>
                        <li><Button className='btn-nav' text='Pricing' link='#pricing' /></li>
                        <li><Button className='btn-nav' text='Community' link='#community' /></li>                        
                    </ul>
                </div>
                <div className="menu-right">   
                    <Button className='btn-nav boldText' text='Sign In' link='#' />
                    <Button className='btn-primary' text='Sign Up' link='' />
                </div>
                
                
                <h2 className="menu-icon" onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</h2>
            </div>
            <Sidebar click={click} handleClick={handleClick}/>
        </div>
    )
}

export default Header
