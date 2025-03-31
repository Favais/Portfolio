import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import user from '../../assets/user.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={logo} alt="" />
                    <p>
                        I'm a fullstack developer that has one year of experience and looking for new project
                    </p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">©️ 2025 Aisosa. All rights reserved</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with Me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
