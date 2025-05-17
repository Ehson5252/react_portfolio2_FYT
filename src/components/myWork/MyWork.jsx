import React from 'react'
import './my-work.css'
import theme_pattern from '../../assets/underline.png'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work'  className='mywork'>
        <div className="mywork-title">
            <h1>My latest work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work, index) => {
                return (<div className="project">
                    <img key={index} src={work.w_img} alt="" /> 
                    <div className='infoOfProject'>
                        <h2>{work.role}</h2>
                        <br/>
                        <h2 className='nameOfProject'>{work.w_name}</h2>
                        <br/>
                        <p>Technologies:</p>
                        <p className='technologies'> {work.technologies}</p>
                        <br/>
                        <a target='_blank' href={work.link}>VISIT WEBSITE</a>
                        
                    </div>
                </div>)
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork