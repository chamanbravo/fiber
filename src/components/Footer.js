import React from 'react'
import './Footer.css'

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
                        <a href=''><li>Homepage</li></a>
                        <a href=''><li>Pricing</li></a>
                        <a href=''><li>Testimonials</li></a>
                        <a href=''><li>Features</li></a>
                    </ul>
                </div>
                <div className='col col3'>
                    <h3 className="footer-head">Resources</h3>
                    <ul className='footer-list'>
                        <a href=''><li>Homepage</li></a>
                        <a href=''><li>Pricing</li></a>
                        <a href=''><li>Testimonials</li></a>
                        <a href=''><li>Features</li></a>
                    </ul>
                </div>
                <div className='col col4'>
                    <h3 className="footer-head">Company</h3>
                    <ul className='footer-list'>
                        <a href=''><li>About</li></a>
                        <a href=''><li>Customer</li></a>
                        <a href=''><li>Blog</li></a>
                    </ul>
                </div>
                <div className='col col5'>
                    <h3 className="footer-head">Portfolios</h3>
                    <ul className='footer-list'>
                        <a href=''><li>Sarah Andrews</li></a>
                        <a href=''><li>Matthew Higgins</li></a>
                        <a href=''><li>Janice Dave</li></a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
