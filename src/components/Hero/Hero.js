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
        <p className="social-icons">
        <a target="_blank" rel="noopener noreferrer" 
href="https://www.linkedin.com/in/kapilan-navaratnam-263368117/">
        <FaLinkedin size='1.5em' style={{ marginRight: "3%", color: "#fff"}} />
</a>
<a target="_blank" rel="noopener noreferrer" 
href="https://github.com/kapilannava/">
 <FaGithub size='1.5em' style={{ color: "#fff" }}/>   
 </a>   
</p>
        </div>
<Link className="learn-more" to="experience" smooth={true} duration={500}>Learn more about me ↓</Link>
        </div>
    )
}

export default Hero;

