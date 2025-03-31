import React from 'react'
import './Services.css'
import element from '../../assets/element.png'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrowicon.png'

const Services = () => {
    return (
        <div id='services' className='services'>
            <div className='services-title'>
                <h1>My Services</h1>
                <img src={element} alt="" />
            </div>
            <div className="services-container">
                {Services_Data.map((s, i) => {
                    return <div key={i} className="services-format">
                        <h3>{s.s_no}</h3>
                        <h2>{s.s_name}</h2>
                        <p>{s.s_desc}</p>
                        <div className="services-readmore">
                            <p>Read More</p>
                            <img src={arrow_icon} alt="" />
                        </div>
                    </div>
                })}
            </div>

        </div>
    )
}

export default Services
