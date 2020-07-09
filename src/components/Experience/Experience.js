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
<p></p>

<p>I completed my degree from <a className="yorku" rel="noopener noreferrer" target="_blank" href="https://www.yorku.ca/index.html">York University</a> with a B.A. of 
Information Technology. I joined the marketing department at <a className="syom" rel="noopener noreferrer" target="_blank" href="https://www.syomortgage.com/">Shop Your Own Mortgage</a>, where I worked
    with a great team on many meaningful projects.
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

