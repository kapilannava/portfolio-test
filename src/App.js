import React from 'react';
import Particles from 'react-particles-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import History from './components/History/History';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import ReactGA from 'react-ga';


function App() {
  return (
    <div className="App">
    <>
	
    <Particles className="particles"
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
      {<Hero />}
      {<Experience />}
      {<History />}
	  {<Projects />}
	  {<Contact />}

</>
    </div>
  );
}

export default App;
