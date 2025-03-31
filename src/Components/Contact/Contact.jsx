import React from 'react'
import './contact.css'
import mail_icon from '../../assets/mail.svg'
import location_icon from '../../assets/location.svg'
import call_icon from '../../assets/call.svg'


const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "077cedcb-ec5c-41d5-a122-fa5cdadf140c");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            alert(result)
            setResult("Form Submitted Successfully");
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
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid doloribus sunt aut, facilis tempore eos exercitationem.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>Ouremail@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /><p>+234080967890</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /><p>Nigeria</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" placeholder='Enter your Name' name='name' />
                    <label htmlFor="email">Your Email</label>
                    <input type="email" placeholder='Enter your Email' name='email' />
                    <label htmlFor="message">Write you Message Here</label>
                    <textarea name="message" rows='8' placeholder='Enter your Message'></textarea>
                    <button type="submit" className="contact-submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact
