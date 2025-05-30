import React from 'react'
import './footer.css'
import footer_logo from '../../assets/my_logo2.png'
import user_icon from '../../assets/user_icon.svg'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" className='logo'/>
                {/* <p>I am a frontend developer from MO, USA with 2 and more years of experience</p> */}
            </div>
            {/* <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Entrer your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div> */}
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bootom-left">&copy; 2025 Ekhsoni Olimzoda. All right reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Serveces</p>
                <p>Privacy policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer