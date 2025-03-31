import React from 'react'
import './mywork.css'
import element from '../../assets/element.png'
import WorkData from '../../assets/mywork_data'
import arrowicon from '../../assets/arrowicon.png'

const Mywork = () => {
    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My latest work</h1>
                <img src={element} alt="" className="title-img" />
            </div>
            <div className="mywork-container">
                {WorkData.map((wd, i) => {
                    return <img key={i} src={wd.w_img} alt="" className="work-img" />
                }
                )}
            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrowicon} alt="" />
            </div>
        </div>
    )
}

export default Mywork
