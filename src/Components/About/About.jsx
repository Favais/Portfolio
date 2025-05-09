import React from 'react'
import './About.css'
import element from '../../assets/element.png'
import Profile from '../../assets/Profile.png'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={element} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={Profile} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am an experienced Full-Stack web developer</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi explicabo repellat illum ipsum quaerat delectus odio.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p><hr style={{ width: '50%' }} />
                        </div>
                        <div className="about-skill">
                            <p>React JS</p><hr style={{ width: '70%' }} />
                        </div>
                        <div className="about-skill">
                            <p>Javascript</p><hr style={{ width: '50%' }} />
                        </div>
                        <div className="about-skill">
                            <p>Node JS</p><hr style={{ width: '60%' }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>90+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default About
