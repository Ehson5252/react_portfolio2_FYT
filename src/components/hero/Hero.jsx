import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll' 
import './hero.css'
import profile_img from '../../assets/my_img1_Hero.webp'

const Hero = () => {
  return (
    <div id='home' className='hero' >
      <img src={profile_img} alt="" />
      <h1><span>I'm Ekhsoni Olimzoda,</span> Web Developer.</h1>
      <p>I am Web Developer from Missouri, USA with 3+ years experience.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume"><a target='_blank' href="https://1drv.ms/b/c/a7fbbb5ac48dc914/EaO_2m1n6K1BjUplXfprRhgB_AnUiJUqtIF6Ho_RKjHvTA?e=rHSCNP">My resume</a></div>
      </div>
    </div>
  )
}

export default Hero