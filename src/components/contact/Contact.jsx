import React from 'react'
import './contact.css'
import theme_pattern from '../../assets/underline.png'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "a2f59a19-01c5-44a7-a8db-b41df0b77885");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            setTimeout(() => setResult(""), 5000)
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I am currently ready to take on a new project and make it responsive for all types of devices.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>oehsoni1@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>+1 573 261 0358</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>MO, United States</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' required/>
                    <label htmlFor="" >Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' required/>
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
                    <div className='submit-result'>
                        <button type='submit' className="contact-submit">Submit now</button>
                        <p className='result'>{result}</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact