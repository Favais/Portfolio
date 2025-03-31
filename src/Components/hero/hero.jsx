import React from 'react'
import './hero.css'
import profileimg from '../../assets/Profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img className='profileimg' src={profileimg} alt="" />
            <h1><span>I'm Aisosa Favour,</span> Full-Stack Developer from Nigeria</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt officia quibusdam quos est!.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
                <div className="hero-resume">My Resume</div>

            </div>
        </div>
    )
}

export default Hero
