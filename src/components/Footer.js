import React from 'react'
import './Footer.css'
import Button from './Button'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-content'>
                <div className='col col1'>
                    <h3 className="footer-head">Fiber</h3>
                    <p className='footer-text'>With fiber, you can setup your own personal portfolio in minutes with dozens of premade, beautiful templates.</p>
                    <p>Created by Chaman Bravo</p>
                </div>
                <div className='col col2'>
                    <h3 className="footer-head">Sitemap</h3>
                    <ul className='footer-list'>
                        <li><Button className='btn-nav footer-btn' text='Homepage' link='#home' /></li>
                        <li><Button className='btn-nav footer-btn' text='Pricing' link='#pricing' /></li>
                        <li><Button className='btn-nav footer-btn' text='Testimonial' link='#community' /></li>
                        <li><Button className='btn-nav footer-btn' text='Features' link='#features' /></li>  
                    </ul>
                </div>
                <div className='col col3'>
                    <h3 className="footer-head">Resources</h3>
                    <ul className='footer-list'>
                        <li><Button className='btn-nav footer-btn' text='Support' link='#' /></li>
                        <li><Button className='btn-nav footer-btn' text='Contact' link='#' /></li>
                        <li><Button className='btn-nav footer-btn' text='FAQ' link='#' /></li>
                    </ul>
                </div>
                <div className='col col4'>
                    <h3 className="footer-head">Company</h3>
                    <ul className='footer-list'>
                        <li><Button className='btn-nav footer-btn' text='About' link='#' /></li>
                        <li><Button className='btn-nav footer-btn' text='Customer' link='#' /></li>
                        <li><Button className='btn-nav footer-btn' text='Blog' link='#' /></li>
                    </ul>
                </div>
                <div className='col col5'>
                    <h3 className="footer-head">Portfolios</h3>
                    <ul className='footer-list'>
                        <li><Button className='btn-nav footer-btn' text='Sarah Andrews' link='#' /></li>
                        <li><Button className='btn-nav footer-btn' text='Matthew Higgins' link='#' /></li>
                        <li><Button className='btn-nav footer-btn' text='Janice Dave' link='#' /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
