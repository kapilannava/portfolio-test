import React from 'react';
import './Hero.css';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Hero(){
    return(
        <div className="hero">
        <div className="title">
            I'm Kap.
            </div>
            <div className="sub-title">
            I build stuff for the web.
        </div>
        <div className="description">
        I'm a web developer based in Toronto, ON who builds and designs websites, 
        applications, and everything in between. 
        <p className="social-icons"><FaLinkedin size='1.5em' style={{ marginRight: "3%"}}/> <FaGithub size='1.5em' />      
</p>
        </div>
<Link className="learn-more" to="experience" smooth={true} duration={500}>Learn more about me ↓</Link>
        </div>
    )
}

export default Hero;

