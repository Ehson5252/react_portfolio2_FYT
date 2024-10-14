import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll' 
import './hero.css'
import profile_img from '../../assets/myimg4.png'

const Hero = () => {
  return (
    <div id='home' className='hero' >
      <img src={profile_img} alt="" />
      <h1><span>I'm Ekhsoni Olimzoda,</span> frontend developer.</h1>
      <p>I am frontend developer from Missouri, USA with 2 years experience in big company like Mars and Yandex.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero