import React from 'react';
import './Experience.css';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-scroll';

function Experience(){
    return(
        <div className="experience" id="experience">
        <div className="title-experience">
            About
            </div>
        <div className="description-experience">
       <p> Hello! I'm Kapilan, a web developer based in Toronto, ON.</p>
<p>I make things that live on the internet, like websites, 
    applications, and graphics. My goal is to always build 
    products that provide the end-user with smooth, user-friendly experiences.
</p>
Here are a few technologies I've been working with recently:       
        </div>
        <h3 className="tags-one">
        <Badge pill variant="light">HTML</Badge>{' '}
        <Badge pill variant="light">CSS</Badge>{' '}
        <Badge pill variant="light">JavaScript</Badge>{' '}
        <Badge pill variant="light">React</Badge>{' '}
        <Badge pill variant="light">Node.js</Badge>{' '}
        </h3>
        <h3 className="tags-two" >
        <Badge pill variant="light">MongoDB</Badge>{' '}
        <Badge pill variant="light">Express</Badge>{' '}
        <Badge pill variant="light">PHP</Badge>{' '}
        <Badge pill variant="light">MySQL</Badge>{' '}
        <Badge pill variant="light">WordPress</Badge>{' '}
        </h3>
        <div className="work-experience-btn"><Link className="learn-more" to="history" smooth={true} duration={500}>Work Experience ↓</Link></div>
</div>
        
    )
}

export default Experience;

