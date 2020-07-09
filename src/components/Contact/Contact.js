import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaLinkedin } from "react-icons/fa";
import './Contact.css';

function Contact(){
    return(
        <div className="contact" id="contact">
                    <div className="contacts" id="contact">
        <div className="title-contact">
        Get in Touch
        </div>
        <p className="title-description">I'm currently looking for new opportunities, and 
            my inbox is always open. If you have any inquiries, you can e-mail me at:
            </p>
            <p className="title-description">
            <a href="mailto:kapilannava@gmail.com" className="email-text">
            kapilannava@gmail.com
            </a>
            </p>
<Button className="contact-button-style">            
<a target="_blank" rel="noopener noreferrer" 
href="https://www.linkedin.com/in/kapilan-navaratnam-263368117/">
<span className="contact-me-text">Connect with me on LinkedIn <FaLinkedin /></span></a></Button> 
</div>

        </div>
    )
}

export default Contact;

